import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { ControlBase } from '../model/control-base';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import * as _ from 'lodash';
import { ConditionsComponent } from '../../cascade-condition/conditions/conditions.component';
import { FormModalService } from '../form-modal.service';

@Component({
  selector: 'xma-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  // 配置中心模态框---------------------
  selectedIndex = 0;
  tabs = [1, 2, 3, 4, 5];

  // 选择下拉
  listOfTagOptions = [];

  setTime = 0;

  endTime;

  // ------------------------------------
  @ViewChild('cascadeConditions', { read: ConditionsComponent }) _cascadeConditions: ConditionsComponent;
  _control: any;
  @Input()
  set control (item: ControlBase<any>) {
    this._control = item;
    if (item['moduleTypes']) {
      this._FormModalService.moduleTypes = item['moduleTypes'];
    }
  }
  get control(): ControlBase<any> {
    return this._control;
  }
  @Input() public form: FormGroup;

  @Output() public submit: EventEmitter<any> = new EventEmitter();
 /**
   * 提交表单并且验证表单内容
  **/
  submitForm() {
    console.log('control的submit已经提交');
    const that = this;
    for (const i in that.form.controls) {
      if (i) {
        console.log(that.form.controls[ i ]);
        that.form.controls[ i ].markAsDirty();
        that.form.controls[ i ].updateValueAndValidity();
        if (that.form.get(i).errors) {
          return false;
          break;
        }
      }
    }
    console.log(that.form.value);
    console.log(that.getValue());

    that.endTime = new FormControl(new Date());
    console.log(that.endTime);
    that.submit.emit(that.getValue());
  }
  onCheck(radio) {
    this.setTime = radio;
  }
  constructor(private fb: FormBuilder,
              private _FormModalService: FormModalService) { }

  ngOnInit() {
    console.log(this.form);
  }
  /**
   * 获取表单内容
  **/
  getValue () {
    const fd = {};
    // 取普通表单
    _.forEach(this.form.value, function(value: any , key: any) {
      fd[key] = value;
    });
    // 取联动表单
    const moduleTypes = this._FormModalService.moduleTypes;
    const conditionsMap = this._FormModalService.conditionsMap;
    for (let i = 0; i < moduleTypes.length; i++) {
      fd[moduleTypes[i]] = conditionsMap.get(moduleTypes[i]).getConditionsVal();
    }
    return fd;
  }
   /**
   * 清空表单内容
  **/
  cleanValue () {
    const moduleTypes = this._FormModalService.moduleTypes;
    const conditionsMap = this._FormModalService.conditionsMap;
    this.form.reset();
    for (let i = 0; i < moduleTypes.length; i++) {
      conditionsMap.get(moduleTypes[i]).clearConditionsVal();
    }
  }
  setValue (obj) {
    const that = this;
    const moduleTypes = this._FormModalService.moduleTypes;
    const conditionsMap = this._FormModalService.conditionsMap;

    _.forEach(that.form.value, function(value: any , key: any) {
      _.forEach(obj, (val, name) => {
        if (key === name) {
          that.form.controls[key].setValue(val);
        }
        for (let i = 0; i < moduleTypes.length; i++) {
          if (name === moduleTypes[i]) {
            conditionsMap.get(moduleTypes[i]).setConditionsVal(val);
          }
        }
      });
    });

  }

  log(args: any[]): void {
    console.log(args);
  }

  timed(num) {
    console.log(num);
    if (this.setTime === 0) {
      console.log('现在点击的是定时发送，需要选择时间选框');
    }
  }

  onChange(result: Date): void {
    console.log('Selected Time: ', result);
  }

  onOk(result: Date): void {
    console.log('onOk', result);
  }

}
