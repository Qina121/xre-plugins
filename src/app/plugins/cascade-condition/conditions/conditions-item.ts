/**
 * Created by HZL on 2017/5/24.
 */
import {FieldItem} from '../condition/field-item';
export class ConditionsItem {
  conditions: FieldItem[];

  constructor(options: {
                conditions?: FieldItem[]
              } = {}) {
    this.conditions = options.conditions || [];
  }
}
