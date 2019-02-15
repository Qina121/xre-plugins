import {NgModule} from '@angular/core';

// detail stuff
import {DynamicTypeBuilder} from './type.builder';
import {DynamicTemplateBuilder} from './template.builder';
import {DynamicComponent} from './dynamic.component';

@NgModule({
  declarations: [
    DynamicComponent
  ],
  exports: [
    DynamicComponent
  ],
  providers: [
    DynamicTemplateBuilder,
    DynamicTypeBuilder
  ]
})
export class DynamicModule {
}
