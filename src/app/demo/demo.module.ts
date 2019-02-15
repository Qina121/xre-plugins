import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModalDemoModule } from './form-modal-demo/form-modal-demo.module';
import { SearchModalDemoComponent } from './search-modal-demo/search-modal-demo.component';
import { SearchModalDemoModule } from './search-modal-demo/search-modal-demo.module';

@NgModule({
  imports: [
    CommonModule,
    FormModalDemoModule,
    SearchModalDemoModule
  ],
  declarations: []
})
export class DemoModule { }
