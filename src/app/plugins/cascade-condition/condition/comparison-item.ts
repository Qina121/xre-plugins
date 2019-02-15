/**
 * Created by HZL on 2017/5/17.
 */
export class ComparisonItem {
  public id: any;
  public text: any;
  public type: any;

  public constructor(source: any) {
    this.id = source.id || '';
    this.text = source.text || '';
    this.type = source.type || '';
  }
}
