import {Injectable} from '@angular/core';
import {isArray} from 'util';

@Injectable()
export class ConditionService {
  seleTS: any;

  constructor() {
  }

  getFieldData(data: any) {
    const arr = [];
    if (isArray(data)) {
      data.forEach(item => {
        arr.push({
          id: item['id'],
          text: item['text'],
          ext: item['comparison']
        });
      });
    }
    return arr;
  }

  getComparisonData(comparison: any) {
    const arr = [];
    if (isArray(comparison)) {
      comparison.forEach(item => {
        arr.push({
          id: item['id'],
          text: item['text'],
          type: item['type']
        });
      });
    }
    return arr;
  }

  getComparisonMap(data: any) {
    const obj = {};
    if (isArray(data)) {
      data.forEach(item => {
        const id = item['id'];
        obj[id] = item['comparison'];
      });
    }
    return obj;
  }

}
