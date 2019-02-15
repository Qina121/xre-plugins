import {ControlBase} from './control-base';

export class MemberConditions extends ControlBase<string> {
  controlType = 'memberConditions';
  conditions: any;
  buttons: any;
  labels: any;
  moduleTypes: any;
  constructor(options: {} = {}) {
    super(options);
    this.conditions = options['conditions'] || null;
    this.buttons = options['buttons'] || null;
    this.labels = options['labels'] || null;
    this.moduleTypes = options['moduleTypes'] || null;
  }
}
