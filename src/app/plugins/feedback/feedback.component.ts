import { Component, OnInit, EventEmitter , Output, ViewChild} from '@angular/core';
import {ElementEventService} from '../../core/service/element-event.service';
import {PanelBase} from '../../core/model/panelbase.model';
import {AlertService} from '../../core/service/alert.service';
import { MessageService } from '../../core/service/message.service';
import {Subscription} from 'rxjs/Subscription';
import {AlertOption} from '../../core/common/alert-option';
import {MessageOption} from '../../core/common/message-option';
import { fade, flyIn } from '../../animate/animate';
import { MessageComponent } from './message/message.component';


@Component({
  selector: 'xma-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  animations: [ fade ],
})
export class FeedbackComponent extends PanelBase implements OnInit {
  messages = [];
  alert = [];
  currentPosition = 'left';
  maskShow: any;
  maskOpaShow = false;
  private subjectServiceMessage: MessageService;
  private subjectServiceAlert: AlertService;

  private optionsMessage: MessageOption;
  private optionsAlert: AlertOption;

  private subscription: Subscription;
  @ViewChild(MessageComponent)
  private messagetext: MessageComponent;

  @Output()
  sureRequest = new EventEmitter();
  constructor() {
    super();
    const that = this;
    this.viewShow = false;
    this.optionsMessage = new MessageOption();
    this.subjectServiceMessage = MessageService.getInstance();
    this.subscription = this.subjectServiceMessage.alertComponent.subscribe(
      options => {
        this.optionsMessage = options;
        // this.show();
        // that.maskShow = true;
        if (this.optionsMessage.type === 'revocation') {
          that.maskOpaShow = true;
        }
        that.messages = [];
        that.messages.unshift(this.optionsMessage.title);
        // that.messages.push(this.optionsMessage.title);
      }
    );

    this.optionsAlert = new AlertOption();
    this.subjectServiceAlert = AlertService.getInstance();
    this.subscription = this.subjectServiceAlert.alertComponent.subscribe(
      options => {
        this.optionsAlert = options;
        that.maskShow = true;
        // this.show();
        // that.alert.unshift(this.optionsAlert.title);
        that.alert = [this.optionsAlert.title];
      }
    );
  }

  ngOnInit() {
  }

  deleArr() {
    // this.messages.pop();
    this.messages = [];
  }
  alertpop() {
    this.alert = [];
    this.maskShow = false;
  }

  hide() {
    if (this.optionsAlert.type === 'revocation') {
      this.optionsAlert.type = '';
      // this.optionsAlert.cancel();
      this.alertpop();
      this.maskShow = false;
    }
  }

  skip() {
    this.maskOpaShow = false;
    if (this.optionsMessage.type === 'revocation') {
      this.optionsMessage.type = '';
      this.optionsMessage.cancel();
    }
  }



}
