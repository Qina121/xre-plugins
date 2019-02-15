/**
 * Created by fight on 2016/12/28.
 */
import {Injectable} from '@angular/core';

/**
 * Element Event Utils.
 *
 * @stable
 */
@Injectable()
export class ElementEventService {
  public static stopBubble(e) {
    // 如果提供了事件对象，则这是一个非IE浏览器
    if (e && e.stopPropagation) {
      // 因此它支持W3C的stopPropagation()方法
      e.stopPropagation();
    } else if (window.event) {
      // 否则，我们需要使用IE的方式来取消事件冒泡
      window.event.cancelBubble = true;
    }

  }
}
