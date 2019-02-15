import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModalDemoComponent } from './form-modal-demo.component';
import { FormModalModule } from '../../plugins/form-modal/form-modal.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    FormModalModule,
    NgZorroAntdModule
  ],
  declarations: [FormModalDemoComponent],
  exports: [FormModalDemoComponent]
})
export class FormModalDemoModule { }
