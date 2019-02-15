/**
 * Created by fight on 2016/12/30.
 */

export class UUID {



  public static UUID(): string {
    const splitUUID = this.generatorUUID();
    return splitUUID[0] + splitUUID[1] + '-' + splitUUID[2] + '-' + splitUUID[3] + '-' +
      splitUUID[4] + '-' + splitUUID[5] + splitUUID[6] + splitUUID[7];
  }

  public static UUID32(): string {
    const splitUUID = this.generatorUUID();
    return splitUUID.join('');
  }

  private static generatorUUID(): string[] {
    const splitUUID: string[] = [];
    if (typeof (window.crypto) !== 'undefined' && typeof (window.crypto.getRandomValues) !== 'undefined') {
      // If we have a cryptographically secure PRNG, use that
      // http://stackoverflow.com/questions/6906916/collisions-when-generating-splitUUID-in-javascript
      const buf: Uint16Array = new Uint16Array(8);
      window.crypto.getRandomValues(buf);
      for (let i = 0; i < 8; i++) {
        splitUUID[i] = this.pad4(buf[i]);
      }
    } else {
      // Otherwise, just use Math.random
      // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
      // https://stackoverflow.com/questions/11605068/why-does-jshint-argue-against-bitwise-operators-how-should-i-express-this-code
      for (let i = 0; i < 8; i++) {
        splitUUID[i] = this.random4();
      }
    }
    return splitUUID;
  }

  private static pad4(num: number): string {
    let ret: string = num.toString(16);
    while (ret.length < 4) {
      ret = '0' + ret;
    }
    return ret;
  }

  private static random4(): string {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

}
