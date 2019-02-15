/**
 * Created by 17710 on 2016/12/15.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FrameComponent} from './frame.component';
import {FrameRoutingModule} from './frame-routing.module';
// import {MemberListModule} from '../../member/member-list/member-list.module';
// import {SmartGroupModule} from '../../member/smart-group/smart-group.module';
// import {ImportGroupModule} from '../../member/import-group/import-group.module';
// import {SmsReportModule} from '../../report/sms-report/sms-report.module';
// import {EmailReportModule} from '../../report/email-report/email-report.module';
// import {WorkflowModule} from '../../workflow/workflow.module';
// import {SmartReportModule} from '../../report/smart-report/smart-report.module';
// import {IndividuationModule} from '../../individuation/individuation.module';
import {HomePageComponent} from '../home-page/home-page.component';
import {AuthService} from '../../../core/service/auth.service';

import { NgZorroAntdModule } from 'ng-zorro-antd';


// import { FormModalDemoComponent } from '../../../demo/form-modal-demo/form-modal-demo.component';
import { FormModalDemoModule } from '../../../demo/form-modal-demo/form-modal-demo.module';

@NgModule({
  imports: [
    CommonModule,
    FrameRoutingModule,
    NgZorroAntdModule,
    FormModalDemoModule
    // SmartGroupModule,
    // ImportGroupModule,
    // SmsReportModule,
    // EmailReportModule,
    // WorkflowModule,
    // SmartReportModule,
    // IndividuationModule,
    // MemberListModule,
  ],
  exports: [],
  declarations: [
    FrameComponent,
    HomePageComponent,
  ],
})
export class FrameModule {
}
