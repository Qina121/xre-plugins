import {AlertService} from '../service/alert.service';
import { MessageService } from '../service/message.service';

export type ResultFunc = (result: CommonResult) => void;


export type AuthFunc = (sid: string) => void;

export class CommonResult {
  code: string;
  message: string;
  data: any;

  static AjaxError() {
    return new CommonResult({
      code: '-1',
      message: 'ajax请求失败，请刷新重试或联系管理员！'
    });
  }

  constructor(options: {
                code?: string,
                message?: string,
                data?: any
              } = {}) {
    this.code = options.code || '-1';
    this.message = options.message || '';
    this.data = options.data;
  }

  get isSuccess(): boolean {
    return this.code === '1';
  }

  checkSuccess(): boolean {
    const success = this.isSuccess;
    if (!success) {
      // AlertService.error(this.message);
      MessageService.error(this.message);
    }
    return success;
  }
}
