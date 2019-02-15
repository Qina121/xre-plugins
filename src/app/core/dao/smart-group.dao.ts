import { Injectable } from '@angular/core';
import { CommonService } from '../service/common.service';
import { ActionService } from '../service/action.service';
import { ServiceList } from '../common/service-list';
import { CommonResult, ResultFunc } from '../model/common-result.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class SmartGroupDao {
  private _groupAction: GroupAction;
  get groupAction(): GroupAction {
    this._groupAction.setUrl(this.groupUrl());
    return this._groupAction;
  }

  private _smartGroupAction: SmartGroupAction;
  get smartGroupAction(): SmartGroupAction {
    this._smartGroupAction.setUrl(this.smartGroupUrl());
    return this._smartGroupAction;
  }

  private _smartGroupV2Action: SmartGroupAction;
  get smartGroupV2Action(): SmartGroupAction {
    this._smartGroupV2Action.setUrl(this.smartGroupV2Url());
    return this._smartGroupV2Action;
  }

  private _fixGroupAction: FixGroupAction;

  get fixGroupAction(): FixGroupAction {
    this._fixGroupAction.setUrl(this.fixGroupUrl());
    return this._fixGroupAction;
  }


  constructor(private cs: CommonService) {
    this._fixGroupAction = new FixGroupAction(this.cs, this.fixGroupUrl());
    this._groupAction = new GroupAction(this.cs, this.groupUrl());
    this._smartGroupAction = new SmartGroupAction(this.cs, this.smartGroupUrl());
    this._smartGroupV2Action = new SmartGroupAction(this.cs, this.smartGroupV2Url());
  }

  groupUrl(): string {
    return ServiceList.SMART_GROUP + '/SmartGroup';
  }

  fixGroupUrl(): string {
    return ServiceList.SMART_GROUP + '/FixGroup';
  }

  smartGroupUrl(): string {
    return ServiceList.SMART_GROUP + '/SmartGroup';
  }

  smartGroupV2Url(): string {
    return ServiceList.SMART_GROUP + '/SmartGroup';
  }
}

class GroupAction extends ActionService<FormData> {
  constructor(cs: CommonService, baseUrl: string) {
    super();
    this.setHttp(cs);
    this.setUrl(baseUrl);
  }
}

class SmartGroupAction extends ActionService<FormData> {
  constructor(cs: CommonService, baseUrl: string) {
    super();
    this.setHttp(cs);
    this.setUrl(baseUrl);
  }

  clearGroupUrl(key: string): string {
    return CommonService.appendKey(ServiceList.SMART_GROUP + '/FixGroupAndMember', key);
  }

  get memberConditionUrl(): string {
    // 这里是真是请求右边侧边栏注释勿删
    // return ServiceList.SMART_GROUP + '/SmartGroup/SmartGroupCondition';
    if (environment.mock) {
      return 'https://src.xrewin.com/api/v1' + '/SmartGroup/SmartGroupCondition';
    } else {
      return ServiceList.SMART_GROUP + '/SmartGroup/SmartGroupCondition';
    }
  }

  get eventConditionUrl(): string {
    return ServiceList.SMART_GROUP + '/Condition/EventCondition';
  }

  get marketingUrl(): string {
    return ServiceList.SMART_GROUP + '/Condition/MarketingCondition';
  }

  get smartGroupFlushAction() {
    return this.getUrl() + '/RefreshSg';
  }

  get eventFilterConditionUrl() {
    return ServiceList.SMART_GROUP + '/Condition/EventFilterCondition';
  }

  get marketingFilterConditionUrl() {
    return ServiceList.SMART_GROUP + '/Condition/MarketingFilterCondition';
  }

  get allMemberCountUrl() {
    return ServiceList.SMART_GROUP + '/SmartGroup/NodeImportCount';
  }

  get smartGroupNodeV2Url() {
    return ServiceList.SMART_GROUP + '/SmartGroup/Node';
  }

  get smartGroupNodeV2ListUrl() {
    return ServiceList.SMART_GROUP + '/SmartGroup';
  }

  get smartGroupRefreshUrl() {
    return ServiceList.SMART_GROUP + '/SmartGroup';
  }

  get smartGroupClearUrl() {
    return ServiceList.SMART_GROUP + '/SmartGroup/Clear';
  }

  get fieldUrl() {
    if (environment.mock) {
      return 'https://src.xrewin.com/api/v1' + '/SmartGroup/Field';
    } else {
      return ServiceList.SMART_GROUP + '/SmartGroup/Field';
    }
  }

  get nodeCountUrl() {
    return ServiceList.SMART_GROUP + '/NodeCount';
  }

  refresh(groupKey: string, successFunc: ResultFunc) {
    const fd = new FormData();
    fd.append('groupKey', groupKey);
    this.getHttp().postJson(this.smartGroupFlushAction, fd).then(
      result => successFunc(new CommonResult(result))
    );
  }

  clearGroup(key: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().deleteJson(this.clearGroupUrl(key)).then(
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

  getMemberCondition(successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().getJson(this.memberConditionUrl).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  getEventCondition(successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().getJson(this.eventConditionUrl).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  getMarketingCondition(successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().getJson(this.marketingUrl).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  getEventFilterCondition(ek: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const url = CommonService.appendParam(this.eventFilterConditionUrl, 'ek', ek);
    this.getHttp().getJson(url).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  getMarketingFilterCondition(ek: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const url = CommonService.appendParam(this.marketingFilterConditionUrl, 'ek', ek);
    this.getHttp().getJson(url).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  getSGNodeV2(id: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const url = CommonService.appendKey(this.smartGroupNodeV2Url, id);
    this.getHttp().getJson(url).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  getSGNodeV2List(id: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const url = CommonService.appendKey(this.smartGroupNodeV2ListUrl, id);
    this.getHttp().getJson(url).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  smartGroupRefresh(id: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const url = CommonService.appendParam(CommonService.appendKey(this.smartGroupRefreshUrl, id), 'r', 'true');
    this.getHttp().getJson(url).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  smartGroupClear(id: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const url = CommonService.appendKey(this.smartGroupClearUrl, id);
    this.getHttp().getJson(url).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  getDropdown(id: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const url = CommonService.appendKey(this.fieldUrl, id);
    this.getHttp().getJson(url).then(
      result => successFunc(new CommonResult(result)),
      error => {
        // console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  delectSGNodeV2(id: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const url = CommonService.appendKey(this.smartGroupNodeV2Url, id);
    this.getHttp().deleteJson(url).then(
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

  getAllMemberCount(id: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    let url = '';
    if (id) {
      url = CommonService.appendKey(this.allMemberCountUrl, id);
    } else {
      url = this.allMemberCountUrl;
    }
    this.getHttp().getJson(url).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  getSmartGroupNodeV2(sgn: SmartGroupNodeV2, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().postJson(this.smartGroupNodeV2Url, sgn).then(
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

  getNodeCount(sgn: SmartGroupNodeV2, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().postJson(this.nodeCountUrl, sgn).then(
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
}

export class SmartGroupNodeV2 {
  key?: string;
  parentKey: string;
  smartGroupKey: string;
  relationType: string;
  behaviorProperty: any;
  marketingProperty: any;
  basicProperty: any;
}
export class FixGroupJoinGroupForm {
  joinFixGroupMemberKey: string;
  newJoinFixGroupKey: string;
}

export class FixGroupChangeGroupForm {
  changeFixGroupMemberKey: string;
  oldChangeFixGroupKey: string;
  newChangeFixGroupKey: string;
}

export class FixGroupRemoveGroupForm {
  memberKey: string;
  fixGroupKey: string;
}

class FixGroupAction extends ActionService<FormData> {
  constructor(cs: CommonService, baseUrl: string) {
    super();
    this.setHttp(cs);
    this.setUrl(baseUrl);
  }

  joinGroupUrl(): string {
    return ServiceList.SMART_GROUP + '/FixGroup/JoinGroup';
  }

  changeGroupUrl(): string {
    return ServiceList.SMART_GROUP + '/FixGroup/ChangeGroup';
  }

  removeGroupUrl(): string {
    return ServiceList.SMART_GROUP + '/FixGroup/RemoveGroup';
  }

  joinGroup(jf: FixGroupJoinGroupForm, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().postJson(this.joinGroupUrl(), CommonService.generateFormData(jf)).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  changeGroup(cf: FixGroupChangeGroupForm, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().postJson(this.changeGroupUrl(), CommonService.generateFormData(cf)).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  removeGroup(rf: FixGroupRemoveGroupForm, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().postJson(this.removeGroupUrl(), CommonService.generateFormData(rf)).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }
}
