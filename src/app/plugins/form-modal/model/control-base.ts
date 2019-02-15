import {CONTROL_CHECK_TYPE} from '../../../core/common/control-check-type';
export class ControlBase<T> {
  value: T;
  // attr.name
  name: string;
  // attr.id
  key: string;
  label: string;
  required: boolean;
  order: number;
  checkType: string;
  checked: boolean;
  controlType: string;
  type: string;
  holder: string;
  confirmKey: string;
  validatorFn: any;
  extendType: string;
  tableFormObj: { rows: any, columns: any };
  tableObj: { rows: any, columns: any };
  changeFn?: (control: ControlBase<T>, e: any) => any;
  extendFn?: (e: any) => any;

  constructor(options: {
                value?: T,
                key?: string,
                name?: string,
                label?: string,
                required?: boolean,
                order?: number,
                type?: string,
                holder?: string,
                checkType?: string,
                controlType?: string,
                extendType?: string,
                validatorFn?: any,
                confirmKey?: string,
                checked?: boolean,
                tableFormObj?: { rows: any, columns: any },
                tableObj?: { rows: any, columns: any }
              } = {}) {
    this.value = options.value;
    this.key = options.key || options.name || '';
    this.name = options.name || this.key;
    this.label = options.label || '';
    this.required = options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.extendType = options.extendType || '';
    this.checkType = options.checkType || CONTROL_CHECK_TYPE.NULL;
    this.type = options.type || '';
    this.validatorFn = options.validatorFn || null;
    this.confirmKey = options.confirmKey || '';
    this.checked = options.checked || false;
    this.tableFormObj = options.tableFormObj || {rows: [], columns: []};
    this.tableObj = options.tableObj || {rows: [], columns: []};
  }

  setValue(value: T) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  getControl(name: string, controls: ControlBase<any>[]): any {
    const arr = controls.filter(control => {
      return control.name === name;
    });
    return arr[0];
  }
}
