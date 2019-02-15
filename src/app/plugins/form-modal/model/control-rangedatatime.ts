import {ControlBase} from './control-base';

export class RangeDateTime extends ControlBase<string> {
  controlType = 'rangeDateTime';

  constructor(options: {} = {}) {
    super(options);
  }
}
