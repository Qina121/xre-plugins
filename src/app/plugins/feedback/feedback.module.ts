import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { MessageComponent } from './message/message.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertComponent, MessageComponent],
  exports: [CommonModule, AlertComponent, MessageComponent ]
})
export class FeedbackModule { }
