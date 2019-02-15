export class Utils {
  // 保留两位小数
  // 功能：将浮点数四舍五入，取小数点后2位
  static toDecimal(x) {
    let f = parseFloat(x);
    if (isNaN(f)) {
      return;
    }
    f = Math.round(x * 100) / 100;
    return f;
  }


  // 制保留3位小数，如：2，会在2后面补上000.即2.000
  static parseMoney(x): string {
    let f = parseFloat(x);
    if (isNaN(f)) {
      return '';
    }
    f = Math.round(x * 100) / 100;
    let s = f.toString();
    let rs = s.indexOf('.');
    if (rs < 0) {
      rs = s.length;
      s += '.';
    }
    while (s.length <= rs + 3) {
      s += '0';
    }
    return s;
  }

  static formatFloat(src, pos): number {
    return Math.round(src * Math.pow(10, pos)) / Math.pow(10, pos);
  }
}
