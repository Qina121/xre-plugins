import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ElementEventService} from './service/element-event.service';
import {ElementUtilsService} from './service/element-utils.service';
import {XrewinImgDirective} from './directive/xrewin-img.directive';
import {XrewinTextDirective} from './directive/xrewin-text.directive';
import {IndividuationSubjectService} from './service/individuation-subject.service';
import {IndividuationTextDirective} from './directive/individuation-text.directive';
import {CommonService} from './service/common.service';
import {AuthService} from './service/auth.service';
// 以下是页面所有处理请求的，以后再做修改
// import {WorkflowDao} from './dao/workflow.dao';
import {PlatformDao} from './dao/platform.dao';
// import {EmlSettingDao} from './dao/eml-setting.dao';
// import {IndividuationDao} from './dao/individuation.dao';
import {SmartGroupDao} from './dao/smart-group.dao';
// import {TransferMapDao} from './dao/transfermap.dao';
// import {DataImportDao} from './dao/dataimport.dao';
// import {SmartReportDao} from './dao/smart-report.dao';
// import {MediaDao} from './dao/media.dao';
// import { IntelligentChartDao } from './dao/intelligent-chart.dao';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    XrewinImgDirective,
    XrewinTextDirective,
    IndividuationTextDirective,
  ],
  declarations: [
    XrewinImgDirective,
    XrewinTextDirective,
    IndividuationTextDirective,
  ],
  providers: [
    CommonService,
    AuthService,
    ElementEventService,
    ElementUtilsService,
    IndividuationSubjectService,
    PlatformDao,
    // WorkflowDao,
    // IndividuationDao,
    SmartGroupDao,
    // TransferMapDao,
    // DataImportDao,
    // SmartReportDao,
    // EmlSettingDao,
    // MediaDao,
    // IntelligentChartDao
  ]
})
export class CoreModule {
}
