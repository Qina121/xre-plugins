import {ControlBase} from './control-base';

export class TextboxControl extends ControlBase<string> {
  controlType = 'textbox';
  type: string;
  holder: string;
  ableEdit: any;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.holder = options['holder'] || '';
    this.ableEdit = options['ableEdit'] || null;
  }
}
