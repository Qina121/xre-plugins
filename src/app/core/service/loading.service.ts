import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';

@Injectable()
export class LoadingService {


  private static _instance: LoadingService = new LoadingService();
  // Observable string sources
  private loadingSource = new Subject<boolean>();
  observableBoolean = this.loadingSource.asObservable();


  static show() {
    LoadingService.getInstance().setShown(true);
  }

  static hide() {
    LoadingService.getInstance().setShown(false);
  }


  public static getInstance(): LoadingService {
    return LoadingService._instance;
  }

  constructor() {
    if (LoadingService._instance) {
      throw new Error('Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.');
    }
    LoadingService._instance = this;
  }

  setShown(shown: boolean) {
    this.loadingSource.next(shown);
  }
}
