import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PanelBase } from '../../../core/model/panelbase.model';
import { MessageService } from '../../../core/service/message.service';
import { Subscription } from 'rxjs/Subscription';
import { MessageOption } from '../../../core/common/message-option';
import { fade } from '../../../animate/animate';

@Component({
  selector: 'xma-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  animations: [fade]
})
export class MessageComponent extends PanelBase implements OnInit {
  currentPosition = 'left';
  private subjectService: MessageService;
  private subscription: Subscription;
  private options: MessageOption;
  @Input()
  opt: any;
  @Input()
  messagearr: any;
  @Output()
  animataOver = new EventEmitter<boolean>();
  @Output()
  sureRequest = new EventEmitter();
  @Input()
  maskOpaShow: any;
  public type = '';
  public state = false;
  fade: any = 'in';
  outState: boolean;
  timer: any;
  timerTwo: any;
  timerThree: any;
  messageHide: any = false;
  messageShow: any = true;
  messageText: any;
  messagetime: number;
  ngOnInit() {
    const that = this;
    if (that.opt.type === 'revocation') {
      that.maskOpaShow = true;
    } else {
      that.maskOpaShow = false;
      clearTimeout( that.timer );
      clearTimeout( that.timerTwo );
      clearTimeout( that.timerThree );
    }
    that.messagetime = that.opt.time;
    that.fade = 'in';
    that.outState = true;
    that.messageHide = false;
    that.messageShow = true;
    that.timer = setTimeout(function() {
      that.fade = 'out';
    }, that.messagetime);
    that.timerTwo = setTimeout(function() {
      that.messageHide = true;
      that.messageShow = false;
    }, that.messagetime + 800);
    that.timerThree = setTimeout(function() {
      that.over();
    }, that.messagetime + 1000);
  }
  over() {
    this.animataOver.emit();
  }
  onConfirm() {
    this.opt.type = '';
    this.opt.confirm();
    this.over();
    this.maskOpaShow = false;
  }
  animationDone() {}
}
