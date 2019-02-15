import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import { isString } from 'util';
import { AlertService } from './alert.service';
import { ServiceList } from '../common/service-list';
import 'rxjs/add/operator/toPromise';
import { isObject } from 'util';
import { ResponseContentType } from '@angular/http';
import { MessageService } from './message.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

/**
 * 通用服务
 */
@Injectable()
export class CommonService {


  constructor(private http: Http, public router: Router) {
    if (!environment.production && !CommonService.getSid()) {
      CommonService.setSid('xrewin@debugger@ssip', false);
    }
    this.refreshServices();
  }
  static readonly PAGE_URL_KEYS = 'PAGE_URL_KEYS';
  static readonly SID_KEY = 'SID_XREWIN';
  private refreshServicesFlag = false;


  static log(log: any) {
    if (!environment.production) {
      console.log(log);
    }
  }

  /**
   * 返回对象 {code:number,data:any}
   * @param res
   * @returns {any|{}}
   */
  private static extractJson(res: Response) {
    const body = res.json();
    return body || {};
  }
  // 处理图片跨域
  private static extractBlob(res: Response) {
    const body = res.blob();
    return body || {};
  }

  private static extractSaveCache(res: Response) {
    const body = res.json();
    CommonService.setPageCache(res.url, res.text());
    return body || {};
  }

  /**
   * 直接返回Data
   // tslint:disable-next-line:no-redundant-jsdoc
   * @param res
   * @returns {{}}
   */
  private static extractJsonData(res: Response) {
    const body = res.json();
    if (body.code !== '1') {
      MessageService.error(body.message);
    }
    return body.data;
  }
  static clearSid() {
    localStorage.removeItem(CommonService.SID_KEY);
    sessionStorage.removeItem(CommonService.SID_KEY);
  }

  static setSid(sid: string, rememberMe: boolean) {
    CommonService.clearSid();
    if (rememberMe) {
      localStorage[CommonService.SID_KEY] = sid;
    } else {
      sessionStorage[CommonService.SID_KEY] = sid;
    }
  }

  static getSid(): string {
    if (sessionStorage[CommonService.SID_KEY]) {
      return sessionStorage[CommonService.SID_KEY];
    } else {
      return localStorage[CommonService.SID_KEY];
    }
  }

  static setPageCache(url: string, data: string) {
    sessionStorage[url] = data;
    sessionStorage[CommonService.PAGE_URL_KEYS] =
      sessionStorage[CommonService.PAGE_URL_KEYS] + '$$$$' + url;
  }

  static clearPageCache() {
    const urls = sessionStorage[CommonService.PAGE_URL_KEYS];
    if (urls) {
      for (const url of urls.split('$$$$')) {
        sessionStorage.removeItem(url);
      }
      sessionStorage.removeItem(CommonService.PAGE_URL_KEYS);
    }
    if (sessionStorage['navbarShow']) {
      sessionStorage.removeItem('navbarShow');
    }
  }

  static setDataCache(key: string, data: string) {
    sessionStorage[key] = data;
  }

  static clearDataCache() {
    sessionStorage.clear();
  }

  static appendParam(url: string, name: string, value: string) {
    if (url && name) {
      name += '=';
      if (url.indexOf(name) === -1) {
        if (url.indexOf('?') !== -1) {
          url += '&';
        } else {
          url += '?';
        }
        url += name + encodeURIComponent(value);
      }
    }
    return url;
  }

  static appendKey(url: string, key: string): string {
    if (key !== '') {
      if (url.indexOf('?') !== -1) {
        return url.replace('?', '/' + key);
      } else {
        if (!url.endsWith('/')) {
          url += '/';
        }
        return url + key;
      }
    }
    return url;
  }

  static appendParams(url: string, paramObj: { [key: string]: any }) {
    for (const key in paramObj) {
      if (paramObj.hasOwnProperty(key)) {
        url = CommonService.appendParam(url, key, paramObj[key]);
      }
    }
    return url;
  }

  static appendSid(data: any): any {
    const sid = CommonService.getSid();
    if (isString(data)) {
      data = CommonService.appendParam(data, 'sid', sid);
    } else if (data instanceof FormData) {
      data.append('sid', sid);
    } else if (data) {
      data['sid'] = sid;
    } else {
      data = {
        sid: sid
      };
    }
    return data;
  }

  static generateFormData(obj: any): FormData {
    const fd = new FormData();
    if (obj && isObject(obj)) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          fd.append(key, obj[key]);
        }
      }
    }
    return fd;
  }

  // constructor(private http: Http, private router: Router) {
  //   if (!environment.production && !CommonService.getSid()) {
  //     CommonService.setSid('xrewin@debugger@ssip', false);
  //   }
  //   if (environment.production) {
  //     ServiceList.initInternet();
  //   }
  //   this.refreshServices();
  // }

  handleErrorFunc(svr) {
    const that = svr;
    return (error: Response | any) => {
      // let errMsg: string;
      if (error instanceof Response) {
        if (error.status === 405) {
          // AlertService.error('服务连接出错问题!', '登录信息已失效，请重新登录！');
          AlertService.confirm('登录信息已失效，请重新登录!', function (confirm) {
            if (confirm) {
              // console.log('点击确认之后跳转登录页面');
              window.location.reload();
              that.router.navigate(['/login']);
            }
          }, '重新登录');
          // return Promise.reject(errMsg);
        }
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        // errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        // errMsg = error.message ? error.message : error.toString();
      }
      // console.error(errMsg);
      // AlertService.error(
      //   '服务连接出错问题!',
      //   '请刷新重试，如需帮助请联系管理员！'
      // );
      MessageService.error(
        '服务连接出错问题!',
        '请刷新重试，如需帮助请联系管理员！'
      );
      // return Promise.reject(errMsg);
    };
  }

  // handleError(error: Response | any) {
  //   const that = this;
  //   console.log(that);
  // }
  getJson(url: string): Promise<any> {
    const that = this;
    url = CommonService.appendSid(url);
    return this.http
      .get(url)
      .toPromise()
      .then(CommonService.extractJson)
      .catch(that.handleErrorFunc(that));
  }
  getJsonDatas(url: string, params: any): Promise<any> {
    const that = this;
    url = CommonService.appendSid(url);
    return this.http
      .get(url, params)
      .toPromise()
      .then(CommonService.extractJson)
      .catch(that.handleErrorFunc(that));
  }
  // 解决跨域图片
  get(url: string): Promise<any> {
    return this.http
      .get(url, { responseType: ResponseContentType.Blob })
      .toPromise()
      .then((response: any) => {
        const blob = new Blob([response._body], {
          type: response.headers.get('Content-Type')
        });
        return blob;
      });
  }

  getJsonData(url: string): Promise<any> {
    url = CommonService.appendSid(url);
    const that = this;
    return this.http
      .get(url)
      .toPromise()
      .then(CommonService.extractJsonData)
      .catch(that.handleErrorFunc(that));
  }
  // 获取工作流表格
  getTabState(url: string, state: string): Promise<any> {
    url = CommonService.appendSid(url);
    const that = this;
    return this.http
      .get(url, { params: { 'statusTab': state } })
      .toPromise()
      .then(CommonService.extractJson)
      .catch(that.handleErrorFunc(that));
  }

  deleteJson(url: string): Promise<any> {
    url = CommonService.appendSid(url);
    const that = this;
    return this.http
      .delete(url)
      .toPromise()
      .then(CommonService.extractJson)
      .catch(that.handleErrorFunc(that));
  }

  deleteJsonData(url: string): Promise<any> {
    url = CommonService.appendSid(url);
    const that = this;
    return this.http
      .delete(url)
      .toPromise()
      .then(CommonService.extractJsonData)
      .catch(that.handleErrorFunc(that));
  }

  postJson(url: string, data: any): Promise<any> {
    data = CommonService.appendSid(data);
    const that = this;
    return this.http
      .post(url, data)
      .toPromise()
      .then(CommonService.extractJson)
      .catch(that.handleErrorFunc(that));
  }

  postJsonData(url: string, data: any): Promise<any> {
    data = CommonService.appendSid(data);
    const that = this;
    return this.http
      .post(url, data)
      .toPromise()
      .then(CommonService.extractJsonData)
      .catch(that.handleErrorFunc(that));
  }

  putJson(url: string, data: any): Promise<any> {
    data = CommonService.appendSid(data);
    const that = this;
    return this.http
      .put(url, data)
      .toPromise()
      .then(CommonService.extractJson)
      .catch(that.handleErrorFunc(that));
  }

  putJsonData(url: string, data: any): Promise<any> {
    data = CommonService.appendSid(data);
    const that = this;
    return this.http
      .put(url, data)
      .toPromise()
      .then(CommonService.extractJsonData)
      .catch(that.handleErrorFunc(that));
  }

  refreshServices() {
    if (environment.local) {
      ServiceList.initLocal();
    } else if (environment.production) {
      ServiceList.initSSL();
    } else if (environment.test) {
      ServiceList.initTest();
    } else if (environment.mock) {
      if (window.location.href.indexOf('http://') === 0) {
        ServiceList.initMock();
      }
    }
  }
}
