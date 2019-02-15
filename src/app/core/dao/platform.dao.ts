import { ServiceList } from './../common/service-list';
import { Injectable } from '@angular/core';
import { CommonService } from '../service/common.service';
import { ActionService } from '../service/action.service';
import { ResultFunc, CommonResult } from '../model/common-result.model';

@Injectable()
export class PlatformDao {

  private _brandAction: BrandAction;
  private _campaignAction: CampaignAction;
  private _customerAction: CustomerAction;
  private _mailSmsViewAction: MailSmsViewAction;
  private _marketingEffectAction: MarketingEffectAction;
  private _userAction: UserAction;
  private _memberAction: MemberAction;
  private _mailDetailReportAction: MailDetailReportAction;
  private _reltypeOptionAction: RelTypeOptionAction;
  private _tableOptionAction: TableOptionAction;
  private _columnOptionAction: ColumnOptionAction;
  private _columnMapOptionAction: ColumnMapOptionAction;
  private _columnOprOptionAction: ColumnOprOptionAction;
  private _chargeLogAction: ChargeLogAction;
  private _rechargeHistory: RechargeHistoryAction;
  private _campaignIndex: CampaignIndexAction;
  private _homeDataIndex: HomeDataIndexAction;
  private _beegoLogAction: BeegoLogAction;
  private _sendLogAction: SendLogAction;

  get chargeLogAction(): ChargeLogAction {
    this._chargeLogAction.setUrl(this.chargeLogUrl());
    return this._chargeLogAction;
  }

  get marketingEffectAction(): MarketingEffectAction {
    this._marketingEffectAction.setUrl(this.marketingEffectUrl());
    return this._marketingEffectAction;
  }

  get homeDataIndexAction(): HomeDataIndexAction {
    this._homeDataIndex.setUrl(this.homeDataIndexUrl());
    return this._homeDataIndex;
  }

  get rechargeHistory(): ChargeLogAction {
    this._rechargeHistory.setUrl(this.rechargeHistoryUrl());
    return this._rechargeHistory;
  }

  get campaignIndex(): CampaignIndexAction {
    this._campaignIndex.setUrl(this.campaignIndexUrl());
    return this._campaignIndex;
  }

  get brandAction(): BrandAction {
    this._brandAction.setUrl(this.brandUrl());
    return this._brandAction;
  }

  get campaignAction(): CampaignAction {
    this._campaignAction.setUrl(this.campaignUrl());
    return this._campaignAction;
  }

  get customerAction(): CustomerAction {
    this._customerAction.setUrl(this.customerUrl());
    return this._customerAction;
  }

  get mailSmsViewAction(): MailSmsViewAction {
    this._mailSmsViewAction.setUrl(this.mailSmsViewUrl());
    return this._mailSmsViewAction;
  }

  get userAction(): UserAction {
    this._userAction.setUrl(this.userUrl());
    return this._userAction;
  }

  get memberAction(): MemberAction {
    this._memberAction.setUrl(this.memberUrl());
    return this._memberAction;
  }

  get mailDetailReportAction(): MailDetailReportAction {
    return this._mailDetailReportAction;
  }

  get reltypeOptionAction(): RelTypeOptionAction {
    this._reltypeOptionAction.setUrl(this.reltypeOptionUrl());
    return this._reltypeOptionAction;
  }

  get tableOptionAction(): TableOptionAction {
    this._tableOptionAction.setUrl(this.tableOptionUrl());
    return this._tableOptionAction;
  }

  get columnOptionAction(): ColumnOptionAction {
    this._columnOptionAction.setUrl(this.columnOptionUrl());
    return this._columnOptionAction;
  }

  get columnOprOptionAction(): ColumnOprOptionAction {
    this._columnOprOptionAction.setUrl(this.columnOprOptionUrl());
    return this._columnOprOptionAction;
  }

  get columnMapOptionAction(): ColumnMapOptionAction {
    this._columnMapOptionAction.setUrl(this.columnMapOptionUrl());
    return this._columnMapOptionAction;
  }

  get beegoLogAction(): BeegoLogAction {
    this._beegoLogAction.setUrl(this.beegoLogActionUrl());
    return this._beegoLogAction;
  }

  get sendLogAction(): SendLogAction {
    this._sendLogAction.setUrl(this.sendLogUrl());
    return this._sendLogAction;
  }

  constructor(private cs: CommonService) {
    this._brandAction = new BrandAction(this.cs, this.brandUrl());
    this._campaignAction = new CampaignAction(this.cs, this.campaignUrl());
    this._customerAction = new CustomerAction(this.cs, this.customerUrl());
    this._mailSmsViewAction = new MailSmsViewAction(this.cs, this.mailSmsViewUrl());
    this._marketingEffectAction = new MarketingEffectAction(this.cs, this.marketingEffectUrl());
    this._userAction = new UserAction(this.cs, this.userUrl());
    this._memberAction = new MemberAction(this.cs, this.memberUrl());
    this._mailDetailReportAction = new MailDetailReportAction(this.cs);
    this._reltypeOptionAction = new RelTypeOptionAction(this.cs, this.reltypeOptionUrl());
    this._tableOptionAction = new TableOptionAction(this.cs, this.tableOptionUrl());
    this._columnOptionAction = new ColumnOptionAction(this.cs, this.columnOptionUrl());
    this._columnOprOptionAction = new ColumnOprOptionAction(this.cs, this.columnOprOptionUrl());
    this._columnMapOptionAction = new ColumnMapOptionAction(this.cs, this.columnMapOptionUrl());
    this._chargeLogAction = new ChargeLogAction(this.cs, this.chargeLogUrl());
    this._rechargeHistory = new RechargeHistoryAction(this.cs, this.rechargeHistoryUrl());
    this._campaignIndex = new CampaignIndexAction(this.cs, this.campaignIndexUrl());
    this._homeDataIndex = new HomeDataIndexAction(this.cs, this.homeDataIndexUrl());
    this._beegoLogAction = new BeegoLogAction(this.cs, this.beegoLogActionUrl());
    this._sendLogAction = new SendLogAction(this.cs, this.sendLogUrl());
  }

  // region BaseUrls
  brandUrl(): string {
    return ServiceList.PLATFORM + '/SysConf/Brand';
  }

  chargeLogUrl(): string {
    return ServiceList.PLATFORM + '/Customer/ChargeLog';
  }

  rechargeHistoryUrl(): string {
    return ServiceList.PLATFORM + '/Customer/RechargeHistory';
  }

  campaignIndexUrl(): string {
    return ServiceList.PLATFORM + '/Home/CampaignIndex';
  }

  marketingEffectUrl(): string {
    return ServiceList.PLATFORM + '/WorkFlowReport/Effect';
  }

  sendLogUrl(): string {
    return ServiceList.PLATFORM + '/SendLog';
  }

  homeDataIndexUrl(): string {
    return ServiceList.PLATFORM + '/Home/DataIndex';
  }

  beegoLogActionUrl(): string {
    return ServiceList.PLATFORM + '/BeegoLog';
  }

  campaignUrl(): string {
    return ServiceList.PLATFORM + '/Campaign';
  }

  customerUrl(): string {
    return ServiceList.PLATFORM + '/SysConf/Customer';
  }

  mailSmsViewUrl(): string {
    return ServiceList.PLATFORM + '/MailSmsView';
  }

  userUrl(): string {
    return ServiceList.PLATFORM + '/User';
  }

  memberUrl(): string {
    return ServiceList.PLATFORM + '/Member';
  }

  reltypeOptionUrl(): string {
    return ServiceList.PLATFORM + '/Option/RelType';
  }

  tableOptionUrl(): string {
    return ServiceList.PLATFORM + '/Option/Table';
  }

  columnOptionUrl(): string {
    return ServiceList.PLATFORM + '/Option/Column';
  }

  columnOprOptionUrl(): string {
    return ServiceList.PLATFORM + '/Option/ColumnOpr';
  }

  columnMapOptionUrl(): string {
    return ServiceList.PLATFORM + '/Option/ColumnMap';
  }

  actionUrl(): string {
    return ServiceList.PLATFORM + '/Option/Action';
  }

  eventUrl(): string {
    return ServiceList.PLATFORM + '/Option/Event';
  }

  // endregion
}

class BrandAction extends ActionService<FormData> {
  constructor(cs: CommonService, baseUrl: string) {
    super();
    this.setHttp(cs);
    this.setUrl(baseUrl);
  }
}

class CustomerAction extends ActionService<FormData> {
  constructor(cs: CommonService, baseUrl: string) {
    super();
    this.setHttp(cs);
    this.setUrl(baseUrl);
  }

  customerDataInfooUrl(): string {
    return ServiceList.PLATFORM + '/CustomerDataInfo';
  }
}

class CampaignAction extends ActionService<FormData> {
  constructor(cs: CommonService, baseUrl: string) {
    super();
    this.setHttp(cs);
    this.setUrl(baseUrl);
  }


  campaignStartUploadUrl(): string {
    return this.getUrl() + '/StartImport';
  }

  campaignPauseUploadUrl(): string {
    return this.getUrl() + '/PauseImport';
  }

  campaignFailStartUploadUrl(): string {
    return this.getUrl() + '/FailStartUpload';
  }

  campaignInfoUrl(): string {
    return ServiceList.PLATFORM + '/CampaignInfo';
  }

  startCampaignUrl(campaignKey: string): string {
    return CommonService.appendKey(ServiceList.PLATFORM + '/Campaign/Operation/Start', campaignKey);
  }

  pauseCampaignUrl(campaignKey: string): string {
    return CommonService.appendKey(ServiceList.PLATFORM + '/Campaign/Operation/Pause', campaignKey);
  }

  stopCampaignUrl(campaignKey: string): string {
    return CommonService.appendKey(ServiceList.PLATFORM + '/Campaign/Operation/Stop', campaignKey);
  }

  continueCampaignUrl(campaignKey: string): string {
    return CommonService.appendKey(ServiceList.PLATFORM + '/Campaign/Operation/Continue', campaignKey);
  }

  campaignInfoDownloadFailUrl(key: string): string {
    return CommonService.appendKey(ServiceList.PLATFORM + '/Campaign/DownloadFail', key);
  }

  startCampaign(campaignKey: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().getJson(this.startCampaignUrl(campaignKey)).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  pauseCampaign(campaignKey: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().getJson(this.pauseCampaignUrl(campaignKey)).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  stopCampaign(campaignKey: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().getJson(this.stopCampaignUrl(campaignKey)).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  continueCampaign(campaignKey: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().getJson(this.continueCampaignUrl(campaignKey)).then(
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

export class MailSmsListForm {
  campaignActType: string;
  campaignTaskName: string;
  brandKey: string;
  startTime: string;
  endTime: string;
  workFlowKey: string;
  workFlowTriggerInfo: string;
}

class MailSmsViewAction extends ActionService<FormData> {
  constructor(cs: CommonService, baseUrl: string) {
    super();
    this.setHttp(cs);
    this.setUrl(baseUrl);
  }

  search(info: MailSmsListForm, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().postJson(this.getUrl(), CommonService.generateFormData(info)).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  get smsSignatureUrl() {
    return ServiceList.PLATFORM + '/Sms/Signature';
  }

  smsSignatureList(successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().getJson(this.smsSignatureUrl).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  getSmsStatus(code: number, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const url = CommonService.appendParams(this.getUrl(), { 'campaignActType': 'sms', 'statusTcode': code });
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

  getSmsStatusData(code: number, campaignKey: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const url = CommonService.appendParams(this.getUrl(), {
      'campaignActType': 'sms',
      'statusTcode': code,
      'campaignKey': campaignKey,
    });
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

  getEmailStatus(code: number, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const url = CommonService.appendParams(this.getUrl(), { 'campaignActType': 'email', 'statusTcode': code });
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

  getEmailStatusData(code: number, campaignKey: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const url = CommonService.appendParams(this.getUrl(), {
      'campaignActType': 'email',
      'statusTcode': code,
      'campaignKey': campaignKey,
    });
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

  getWorkflowReport(obj: { workflowKey: string, campaignActType?: string }, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const url = CommonService.appendParams(this.getUrl(), obj);
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

  getSmsFilterList(formData) {
    const smsUrl = CommonService.appendParams(this.getUrl(), {
      'campaignActType': 'sms',
      'statusTcode': formData.statusTcode
    });
    const url = CommonService.appendParams(smsUrl, formData);
    return this.getHttp().getJsonData(url);
  }

  getEmailFilterList(formData) {
    const smsUrl = CommonService.appendParams(this.getUrl(), {
      'campaignActType': 'email',
      'statusTcode': formData.statusTcode
    });
    const url = CommonService.appendParams(smsUrl, formData);
    return this.getHttp().getJsonData(url);
  }
}

class UserAction extends ActionService<FormData> {
  constructor(cs: CommonService, baseUrl: string) {
    super();
    this.setHttp(cs);
    this.setUrl(baseUrl);
  }

  get usersUrl() {
    return ServiceList.PLATFORM + '/Users';
  }

  get resetPasswordUrl() {
    return this.getUrl() + '/ResetPassword';
  }

  get changePasswordUrl() {
    return this.getUrl() + '/ChangePassword';
  }

  get toggleCloseUrl() {
    return this.getUrl() + '/ToggleClose';
  }

  get toggleSuperUrl() {
    return this.getUrl() + '/ToggleSuper';
  }

  list(successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().getJson(this.usersUrl).then(
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
    const url = CommonService.appendParams(this.usersUrl, formData);
    return this.getHttp().getJsonData(url);
  }

  changePassword(fd: FormData, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().postJson(this.changePasswordUrl, fd).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  resetPassword(userID: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const fd = new FormData();
    fd.append('id', userID);
    this.getHttp().postJson(this.resetPasswordUrl, fd).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  toggleClose(userID: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const fd = new FormData();
    fd.append('key', userID);
    this.getHttp().postJson(this.toggleCloseUrl, fd).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  toggleSuper(userID: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const fd = new FormData();
    fd.append('key', userID);
    this.getHttp().postJson(this.toggleSuperUrl, fd).then(
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


class MemberAction extends ActionService<FormData> {
  constructor(cs: CommonService, baseUrl: string) {
    super();
    this.setHttp(cs);
    this.setUrl(baseUrl);
  }

  retryImportMembersUrl(campaignKey: string): string {
    return CommonService.appendKey(ServiceList.PLATFORM + '/Member/RetryImportMembers', campaignKey);
  }

  retryImportMembers(campaignKey: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().getJson(this.retryImportMembersUrl(campaignKey)).then(
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

export class MailDetailReportSearch {
  key: string;
  telphone: string;
  email: string;
}

export class MailDetailReportGotoInfo {
  previewKey: string;
  pageSize: string;
  curPage: string;
}

class MailDetailReportAction extends ActionService<FormData> {
  constructor(cs: CommonService) {
    super();
    this.setHttp(cs);
  }

  totalReportUrl() {
    return ServiceList.PLATFORM + '/Campaign/MailTotalReport';
  }

  clickReportUrl() {
    return ServiceList.PLATFORM + '/Campaign/ClickReport';
  }

  clickTemplateUrl() {
    return ServiceList.PLATFORM + '/Campaign/MailClickTemplate';
  }

  clickIndividuationTempUrl() {
    return ServiceList.PLATFORM + '/MailDetailReport/ClickIndividuationTemp';
  }

  gotoPagePreviewUrl() {
    return ServiceList.PLATFORM + '/MailDetailReport/GotoPagePreview';
  }

  periodStatisticsUrl() {
    return ServiceList.PLATFORM + '/Campaign/PeriodStatistics';
  }

  customerStatisticsUrl() {
    return ServiceList.PLATFORM + '/Campaign/CustomerStatistics';
  }

  totalReport(campaignKey: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const fd = new FormData();
    fd.append('key', campaignKey);
    this.getHttp().postJson(this.totalReportUrl(), fd).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  clickReport(campaignKey: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const fd = new FormData();
    fd.append('key', campaignKey);
    this.getHttp().postJson(this.clickReportUrl(), fd).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  clickTemplate(campaignKey: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const fd = new FormData();
    fd.append('key', campaignKey);
    this.getHttp().postJson(this.clickTemplateUrl(), fd).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  clickIndividuationTemp(searchInfo: MailDetailReportSearch, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const fd = CommonService.generateFormData(searchInfo);
    this.getHttp().postJson(this.clickIndividuationTempUrl(), fd).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  gotoPagePreview(gotoInfo: MailDetailReportGotoInfo, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const fd = CommonService.generateFormData(gotoInfo);
    this.getHttp().postJson(this.gotoPagePreviewUrl(), fd).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  periodStatistics(campaignKey: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const fd = new FormData();
    fd.append('key', campaignKey);
    this.getHttp().postJson(this.periodStatisticsUrl(), fd).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  customerStatistics(campaignKey: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const fd = new FormData();
    fd.append('key', campaignKey);
    this.getHttp().postJson(this.customerStatisticsUrl(), fd).then(
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

class RelTypeOptionAction extends ActionService<FormData> {
  constructor(cs: CommonService, baseUrl: string) {
    super();
    this.setHttp(cs);
    this.setUrl(baseUrl);
  }

  getRelTypes(type: string, code: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const url = CommonService.appendKey(CommonService.appendKey(this.getUrl(), type), code);
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
}

class TableOptionAction extends ActionService<FormData> {
  constructor(cs: CommonService, baseUrl: string) {
    super();
    this.setHttp(cs);
    this.setUrl(baseUrl);
  }

  getDetail(key: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().getJson(CommonService.appendParam(CommonService.appendKey(this.getUrl(), key), 'detail', 'true')).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  updateDetail(key: string, data: any, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().putJson(CommonService.appendKey(this.getUrl(), key), data).then(
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

class ColumnOptionAction extends ActionService<FormData> {
  constructor(cs: CommonService, baseUrl: string) {
    super();
    this.setHttp(cs);
    this.setUrl(baseUrl);
  }

  getColumnCondition(successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().getJson(CommonService.appendParam(this.getUrl(), 'condition', 'true')).then(
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

class ColumnOprOptionAction extends ActionService<FormData> {
  constructor(cs: CommonService, baseUrl: string) {
    super();
    this.setHttp(cs);
    this.setUrl(baseUrl);
  }
}

class ChargeLogAction extends ActionService<FormData> {
  constructor(cs: CommonService, baseUrl: string) {
    super();
    this.setHttp(cs);
    this.setUrl(baseUrl);
  }
}

class RechargeHistoryAction extends ActionService<FormData> {
  constructor(cs: CommonService, baseUrl: string) {
    super();
    this.setHttp(cs);
    this.setUrl(baseUrl);
  }
}

class HomeDataIndexAction extends ActionService<FormData> {
  constructor(cs: CommonService, baseUrl: string) {
    super();
    this.setHttp(cs);
    this.setUrl(baseUrl);
  }

  getHomeDataIndex(interval: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().getJson(CommonService.appendParam(this.getUrl(), 'interval', interval)).then(
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

class MarketingEffectAction extends ActionService<FormData> {
  constructor(cs: CommonService, baseUrl: string) {
    super();
    this.setHttp(cs);
    this.setUrl(baseUrl);
  }

  getWorkflowReport(workflowKey: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const url = CommonService.appendParam(this.getUrl(), 'workflowKey', workflowKey);
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

  getCampaignReport(campaignKey: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const url = CommonService.appendParam(this.getUrl(), 'campaignKey', campaignKey);
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
}

class CampaignIndexAction extends ActionService<FormData> {
  constructor(cs: CommonService, baseUrl: string) {
    super();
    this.setHttp(cs);
    this.setUrl(baseUrl);
  }

  getCampaignIndex(obj: any, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().getJson(CommonService.appendParams(this.getUrl(), obj)).then(
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

class ColumnMapOptionAction extends ActionService<FormData> {
  constructor(cs: CommonService, baseUrl: string) {
    super();
    this.setHttp(cs);
    this.setUrl(baseUrl);
  }

  getMaps(mtCode: string, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().getJson(CommonService.appendParam(this.getUrl(), 'mt', mtCode)).then(
      result => successFunc(new CommonResult(result)),
      error => {
        console.error(error);
        if (errFunc) {
          errFunc(CommonResult.AjaxError());
        }
      }
    );
  }

  updateMaps(mtCode: string, maps: any, successFunc: ResultFunc, errFunc?: ResultFunc) {
    this.getHttp().putJson(CommonService.appendParam(this.getUrl(), 'mt', mtCode), maps).then(
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

class BeegoLogAction extends ActionService<FormData> {
  constructor(cs: CommonService, baseUrl: string) {
    super();
    this.setHttp(cs);
    this.setUrl(baseUrl);
  }

  show(form: any, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const url = CommonService.appendParams(this.getUrl() + '/Show', form);
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
  showIndex(successFunc: ResultFunc, errFunc?: ResultFunc) {
    const url = this.getUrl() + '/ShowIndex';
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
}
class SendLogAction extends ActionService<FormData> {
  constructor(cs: CommonService, baseUrl: string) {
    super();
    this.setHttp(cs);
    this.setUrl(baseUrl);
  }
  show(form: any, successFunc: ResultFunc, errFunc?: ResultFunc) {
    const url = CommonService.appendParams(this.getUrl(), form);
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
}
