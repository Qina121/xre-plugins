import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModalComponent } from './form-modal.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ControlComponent } from './control/control.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CascadeConditionModule } from '../cascade-condition/cascade-condition.module';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    CascadeConditionModule
  ],
  exports: [CommonModule, FormModalComponent],
  declarations: [
    FormModalComponent,
    ControlComponent]
})
export class FormModalModule { }
