import { Component, OnInit, EventEmitter , Output, Input, ElementRef, ViewChild, Renderer} from '@angular/core';
import {ElementEventService} from '../../../core/service/element-event.service';
import {PanelBase} from '../../../core/model/panelbase.model';
import {AlertService} from '../../../core/service/alert.service';
import {Subscription} from 'rxjs/Subscription';
import {AlertOption} from '../../../core/common/alert-option';
import { fade, flyIn } from '../../../animate/animate';


@Component({
  selector: 'xma-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  animations: [ fade ],
})

export class AlertComponent extends PanelBase implements OnInit {
  currentPosition = 'left';
  private renderer: Renderer;
  private subjectService: AlertService;
  private subscription: Subscription;
  private options: AlertOption;
  @Input() alertopt: any;
  @Input() maskShow: any;
  @Output() sureRequest = new EventEmitter();
  @Output()
  animataOver = new EventEmitter<boolean>();
  @ViewChild('error') _error: ElementRef;
  // constructor(private elementRef: ElementRef, private renderer: Renderer) { }
  public  type = '';
  public  message: any = '';
  public  state = false;
  fade: any = '';
  outState: boolean;
  timer: any;
  timerTwo: any;
  alertHide: any = false;
  alertShow: any = true;
  num: number;
  Height: number;


  ngOnInit() {
    // 样式
    // const Height = document.documentElement.clientWidth;
    // console.log(this._error);
    // this.renderer.setElementStyle(this._error.nativeElement, 'height', Height + 'px');
    this.alertHide = false;
    this.alertShow = true;
    this.num = this.alertopt.time;
    if (this.alertopt.type === 'warning' || this.alertopt.type === 'warningtip') {

    } else {
      const that = this;
      that.fade  = 'in';
        that.timer = setTimeout(function() {
          that.fade  = 'out';
          that.over();
        }, this.alertopt.time);
        that.timerTwo = setTimeout(function() {
          this.alertHide = true;
          this.alertShow = false;
        }, that.num + 300 );
    }
  }



  // getType(content,tip){
  //   this.type = content;
  //   this.message = tip;
  // }
  // ok(){
  //   this.type = "11";
  //   this.options.confirm();
  // }
  // cancel(){
  //   this.type = "";
  //   this.options.cancel();
  // }
  // onClick(e: any) {
  //   ElementEventService.stopBubble(e);
  //   if (this.options && this.options.allowOutsideClick) {
  //     this.viewShow = false;
  //   }
  // }

  onConfirm() {
    this.hide();
    this.alertopt.type = '';
    this.alertopt.confirm();
    this.over();
    this.maskShow = false;
  }

  onCancel() {
    this.hide();
    this.alertopt.type = '';
    this.alertopt.cancel();
    this.over();
    this.maskShow = false;
  }
  animationDone() {
  }
  over() {
    this.animataOver.emit();
  }
  cancleButton() {
    this.alertopt.type = '';
  }
}
