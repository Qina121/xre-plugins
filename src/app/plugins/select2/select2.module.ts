import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SelectComponent} from './select/select.component';
import {HighlightPipe} from './select/select-pipes';
import {OffClickDirective} from './select/off-click.directive';
import {ReactiveFormsModule} from '@angular/forms';
import {SelectService} from './select/select.service';
import { FormModalService } from '../form-modal/form-modal.service';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule],
  declarations: [SelectComponent, HighlightPipe, OffClickDirective],
  exports: [SelectComponent, HighlightPipe, OffClickDirective],
  providers: [SelectService, FormModalService]
})
export class Select2Module {
}
