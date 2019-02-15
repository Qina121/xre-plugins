/**
 * Created by HZL on 2017/5/17.
 */
import {ComparisonItem} from './comparison-item';
export class FieldItem {
  public id: any;
  public text: any;
  public comparison: ComparisonItem[];

  public constructor(source: any) {
    this.id = source.id || '';
    this.text = source.text || '';
    this.comparison = source.comparison || [];
  }
}
