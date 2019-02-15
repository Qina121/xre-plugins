import {Subject} from 'rxjs/Subject';
import {DynamicComponent} from '../../plugins/dynamic/dynamic.component';
import {Injectable} from '@angular/core';

@Injectable()
export class IndividuationSubjectService {
  private static _instance: IndividuationSubjectService = new IndividuationSubjectService();
  // Observable string sources
  private templateSource = new Subject<DynamicComponent>();

  tmplComponent = this.templateSource.asObservable();

  public static getInstance(): IndividuationSubjectService {
    return IndividuationSubjectService._instance;
  }


  constructor() {
    if (IndividuationSubjectService._instance) {
      throw new Error('Error: Instantiation failed: Use IndividuationSubjectService.getInstance() instead of new.');
    }
    IndividuationSubjectService._instance = this;
  }


  setTemplateComp(tmpl: DynamicComponent) {
    this.templateSource.next(tmpl);
  }


}
