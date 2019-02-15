import {Injectable} from '@angular/core';
import {MessageOption} from '../common/message-option';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class MessageService {
  private static _instance: MessageService = new MessageService();
  // Observable string sources
  private subjectMessageOption = new Subject<MessageOption>();
  alertComponent = this.subjectMessageOption.asObservable();

  static alert(title: string, text?: string, type?: string): void {
    const options = new MessageOption({title, text, type});
    MessageService.swal(options);
  }

  static success(title: string, text?: string) {
    MessageService.alert(title, text, 'success');
  }
  static error(title: string, text?: string) {
    MessageService.alert(title, text, 'error');
  }
  // 添加
  static info(title: string, text?: string) {
    MessageService.alert(title, text, 'info');
  }

  static confirm(title: string, closeHandle: (confirm: boolean) => any, text?: string, type?: string) {
    const options = new MessageOption({title, text, type, closeHandle});
    options.type = 'warning';
    options.cancelButtonText = '取消';
    options.confirmButtonText = '确定';
    MessageService.swal(options);
  }

  static revocation(title: string, closeHandle: (confirm: boolean) => any, time?: number, text?: string, type?: string) {
    const options = new MessageOption({title, text, type, closeHandle, time});
    options.type = 'revocation';
    // options.cancelButtonText = '取消';
    // options.confirmButtonText = '确认';
    MessageService.swal(options);
  }

  static swal(option: any): any {
    MessageService.getInstance().sendOption(option);
  }


  public static getInstance(): MessageService {
    return MessageService._instance;
  }

  constructor() {
    if (MessageService._instance) {
      throw new Error('Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.');
    }
    MessageService._instance = this;
  }

  sendOption(option: MessageOption) {
    this.subjectMessageOption.next(option);
  }
}
