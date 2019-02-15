import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchModalDemoComponent } from './search-modal-demo.component';
import { SearchModule } from 'src/app/plugins/search/search.module';

@NgModule({
  imports: [
    CommonModule,
    SearchModule
  ],
  declarations: [SearchModalDemoComponent],
})
export class SearchModalDemoModule { }
