import {ControlBase} from './control-base';

export class RadioControl extends ControlBase<string> {
  controlType = 'radio';
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
