/**
 * Created by HZL on 2017/3/30.
 */
import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import {SelectItem} from './select-item';

@Injectable()
export class SelectService {

  private selectLoad = new Subject<any>();
  private selectClear = new Subject<any>();
  private setSelectVal = new Subject<any>();

  selectLoad$ = this.selectLoad.asObservable();
  selectClear$ = this.selectClear.asObservable();
  setSelectVal$ = this.setSelectVal.asObservable();

  showLoad() {
    this.selectLoad.next(true);
  }

  hideLoad() {
    this.selectLoad.next(false);
  }

  setValue(data: SelectItem) {
    this.setSelectVal.next(data);
  }

  clear(data: any) {
    this.selectClear.next(data);
  }
}
