import {ControlBase} from './control-base';

export class Tabs extends ControlBase<string> {
  controlType = 'tabs';
  nzTabPosition: string;

  constructor(options: {} = {}) {
    super(options);
    this.nzTabPosition = options['nzTabPosition'] || '';
  }
}
