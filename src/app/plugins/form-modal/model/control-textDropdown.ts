import {ControlBase} from './control-base';

export class TextDropdownControl extends ControlBase<string> {
  controlType = 'textDropdown';
  type: string;
  holder: string;
  ableEdit: any;
  list: any;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.holder = options['holder'] || '';
    this.ableEdit = options['ableEdit'] || null;
    this.list = options['list'] || null;
  }
}
