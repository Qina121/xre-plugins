import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConditionComponent } from './condition/condition.component';
import { ConditionService } from './condition/condition.service';
import { Select2Module } from '../select2/select2.module';
import { SelectTreeModule } from './../select-tree/select-tree.module';
// import { DatetimePickerModule } from '../campaign/datetime/datetime-picker.module';
import { ConditionsComponent } from './conditions/conditions.component';
import { FormsModule } from '@angular/forms';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Select2Module,
    SelectTreeModule,
    // DatetimePickerModule,
    NgZorroAntdModule,
    // BsDropdownModule.forRoot()
  ],
  declarations: [
    ConditionComponent,
    ConditionsComponent
  ],
  exports: [
    ConditionComponent,
    ConditionsComponent
  ],
  providers: [ConditionService, { provide: NZ_I18N, useValue: zh_CN }]
})
export class CascadeConditionModule {
}
