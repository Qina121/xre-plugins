import { SelectTreeComponent } from './select-tree.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeviewModule } from './lib/treeview.module';

@NgModule({
  imports: [
    CommonModule,
    TreeviewModule.forRoot()
  ],
  declarations: [SelectTreeComponent],
  exports: [SelectTreeComponent]
})
export class SelectTreeModule { }
