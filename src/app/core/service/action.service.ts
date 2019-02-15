import { async } from '@angular/core/testing';
import { CommonService } from './common.service';
import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';
import { ServiceList } from '../common/service-list';
import { ResultFunc, CommonResult } from '../model/common-result.model';
import { environment } from '../../../environments/environment';
/**
 * 对应的Web后台服务的Action，基础类
 */
@Injectable()
export abstract class ActionService<T> {
  private url: string;
  private http: CommonService;

  constructor() {}

  // region 基础方法

  setUrl(url: string) {
    this.url = url;
  }

  setHttp(cs: CommonService) {
    this.http = cs;
  }

  getUrl() {
    return this.url;
  }

  getHttp() {
    return this.http;
  }

  // endregion

  // region url链接

  // region 智能分组

  get smartGroupAction(): string {
    return ServiceList.SMART_GROUP + '/SmartGroup';
  }

  get smartGroupNodeAction(): string {
    return ServiceList.SMART_GROUP + '/SmartGroupNode';
  }

  // endregion

  // region 个性化

  get mailTemplateAction(): string {
    return ServiceList.INDIVIDUATION + '/Mail/Template';
  }

  get smsTemplateAction(): string {
    return ServiceList.INDIVIDUATION + '/Sms/Template';
  }

  pictureMaterialAction(): string {
    return ServiceList.INDIVIDUATION + '/Media/Source';
  }

  // endregion

  // endregion

  // region Ajax请求操作

  get(key: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.http.getJson(CommonService.appendKey(this.url, key)).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }
  // 解决图片跨域问题
  getImg(url) {
    return this.http.get(url).then(
      result => {
        return result;
      },
      error => {
        console.error(error);
      }
    );
  }
  getReportFormData(successFunc: ResultFunc, params: any, errFunc?: ResultFunc) {
    let url;
    if (environment.mock) {
      url = `${this.url}`;
    } else {
      url = this.url;
    }
    this.http.getJsonDatas(url, params).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }



  list(successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.http.getJson(this.url).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  // 查询
  getFilterList(formData: any) {
    const url = CommonService.appendParams(this.url, formData);
    return this.http.getJsonData(url);
  }

  add(model: T, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.http.postJson(this.url, model).then(
      result => {
        successFunc(new CommonResult(result));
      },
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  /**
   * 带Loading界面的增加操作，一般用于等待时间较长的操作，如增加智能分组节点
   * @param model
   * @param successFunc
   * @param errFunc
   */
  addWithLoading(model: T, successFunc: ResultFunc, errFunc?: ResultFunc) {
    LoadingService.show();
    this.http.postJson(this.url, model).then(
      result => {
        LoadingService.hide();
        successFunc(new CommonResult(result));
      },
      error => {
        LoadingService.hide();
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  update(model: T, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.http.putJson(this.url, model).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  remove(key: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.http.deleteJson(CommonService.appendKey(this.url, key)).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }
  removeMaterialImg(key: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.http.deleteJson(CommonService.appendKey(this.pictureMaterialAction(), key)).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  // 删除项
  delGroup(lists: any, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.http.deleteJson(CommonService.appendKey(this.url, lists)).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  // endregion
}
