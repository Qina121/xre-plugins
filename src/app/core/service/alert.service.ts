import {Injectable} from '@angular/core';
import {AlertOption} from '../common/alert-option';
import {Subject} from 'rxjs/Subject';
import { from } from 'rxjs';


@Injectable()
export class AlertService {
  private static _instance: AlertService = new AlertService();
  // Observable string sources
  private subjectAlertOption = new Subject<AlertOption>();
  alertComponent = this.subjectAlertOption.asObservable();

  static alert(title: string, text?: string, type?: string, cancleButton?: string): void {
    const options = new AlertOption({title, text, type, cancleButton});
    AlertService.swal(options);
  }

  static success(title: string, text?: string, cancleButton?: string) {
    AlertService.alert(title, text, 'success', cancleButton);
  }

  static error(title: string, text?: string, cancleButton?: string) {
    AlertService.alert(title, text, 'error', cancleButton);
  }
  // 添加
  static info(title: string, text?: string, cancleButton?: string) {
    AlertService.alert(title, text, 'info', cancleButton);
  }

  static confirm(title: string, closeHandle: (confirm: boolean) => any,
  cancleButton?: string, iconType?: string, text?: string, type?: string) {
    const options = new AlertOption({title, text, type, closeHandle, iconType});
    options.type = type || 'warning';
    options.iconType = iconType || 'exclamation';
    options.cancelButtonText = '取消';
    options.confirmButtonText = cancleButton || '确定';
    AlertService.swal(options);
  }

  static tipCancle(title: string, closeHandle: (confirm: boolean) => any, cancleButton?: string, text?: string, type?: string) {
    const options = new AlertOption({title, text, type, closeHandle});
    options.type = type || 'warningtip';
    options.cancelButtonText = '取消';
    options.confirmButtonText = cancleButton || '确定';
    AlertService.swal(options);
  }

  static revocation(title: string, closeHandle: (confirm: boolean) => any, text?: string, type?: string) {
    const options = new AlertOption({title, text, type, closeHandle});
    options.type = 'revocation';
    AlertService.swal(options);
  }

  static swal(option: any): any {
    AlertService.getInstance().sendOption(option);
  }


  public static getInstance(): AlertService {
    return AlertService._instance;
  }

  constructor() {
    if (AlertService._instance) {
      throw new Error('Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.');
    }
    AlertService._instance = this;
  }

  sendOption(option: AlertOption) {
    this.subjectAlertOption.next(option);
  }
}
