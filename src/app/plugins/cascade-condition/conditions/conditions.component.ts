import {AfterViewInit, Component, Input, OnInit, ViewChildren, ViewChild, EventEmitter, Output} from '@angular/core';
import {FieldItem} from '../condition/field-item';
import {ConditionService} from '../condition/condition.service';
import {ConditionComponent} from '../condition/condition.component';
import {isArray, isObject} from 'util';
import { SelectComponent } from '../../select2/select/select.component';
import set = Reflect.set;
import { FormModalService } from '../../form-modal/form-modal.service';

@Component({
  selector: 'xma-cascade-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit, AfterViewInit {
  @ViewChild('memberProp', { read: ConditionComponent }) _memberProp: ConditionComponent;
  @ViewChild('memberSrc', { read: SelectComponent }) _memberSrc: SelectComponent;
  private _conditionData = [];
  @Input() memberItems = [];
  @Input() memberdata;
  @Input() memberName = [];
  @Input() conditionNumber = [0];
  fieldData = [];
  @Input() conditionIndex = 1;
  comparisonMap = {};
  conditionMap = {};
  andOrTitle = '且';
  isOr = false;
  @Input() hasDelBtn = false;
  @Input() moduleType;
  @Input() SeleMemberSource;
  @Input() hideAddBtn: boolean;
  @Output() selectForm = new EventEmitter<number>();
  @ViewChildren(ConditionComponent) conditions: any;

  @Input()
  set conditionData(data: FieldItem[]) {
    this._conditionData = data;
    this.fieldData = this.conditionService.getFieldData(data);
    this.comparisonMap = this.conditionService.getComparisonMap(data);
  }

  get conditionData(): FieldItem[] {
    return this._conditionData;
  }

  constructor(private conditionService: ConditionService,
              private _FormModalService: FormModalService) {
  }

  ngOnInit() {
    this._FormModalService.conditionsMap.set( this.moduleType, this);
  }

  ngAfterViewInit(): void {
    for (const condition of this.conditions._results) {
      this.conditionMap[condition.conditionIndex] = condition;
    }
  }

  resetConditionMap() {
    this.conditionMap = {};
  }

  refreshConditionMap(setCondition?: any, type?: string, _index?: number) {
    const that = this;
    that.resetConditionMap();
    setTimeout(function () {
      for (const condition of that.conditions._results) {
        that.conditionMap[condition.conditionIndex] = condition;
      }
      if (isArray(setCondition)) {
        that.conditionNumber.forEach((val, index) => {
          const obj = setCondition[index];
          if (type === 'incident') {
            that.conditionMap[index].setIncidentConditionVal(obj, _index);
          } else if (type === 'mk-incident') {
            that.conditionMap[index].setMkIncidentConditionVal(obj, _index);
          } else {
            that.conditionMap[index].setConditionVal(obj);
          }
        });
      }
    }, 100);
  }

  refreshCMap(setCondition?: any, type?: string, _index?: number) {
    const that = this;
    that.resetConditionMap();
    setTimeout(function () {
      for (const condition of that.conditions._results) {
        that.conditionMap[condition.conditionIndex] = condition;
      }
      if (isArray(setCondition)) {
        that.conditionNumber.forEach((val, index) => {
          const obj = setCondition[index];
          if (type === 'incident') {
            that.conditionMap[index].setIncidentConditionVal(obj, _index);
          } else if (type === 'mk-incident') {
            that.conditionMap[index].setMkIncidentConditionVal(obj, _index);
          } else {
            that.conditionMap[index].setCVal(obj);
          }
        });
      }
    }, 100);
  }

  getConditionsVal() {
    const that = this;
    const arr = [];
    that.conditionNumber.forEach((val, index) => {
      if (that.conditionMap[index]) {
        const conditionObj = that.conditionMap[index].getConditionVal();
        arr.push(conditionObj);
      }
    });
    return {
      relation: that.isOr ? 'or' : 'and',
      conditions: arr
    };
  }

  // 工作流行为监控获取数据
  getCsVal() {
    const that = this;
    const arr = [];
    that.conditionNumber.forEach((val, index) => {
      if (that.conditionMap[index]) {
        const conditionObj = that.conditionMap[index].getCVal();
        arr.push(conditionObj);
      }
    });
    return arr;
  }

  addCondition(index: number) {
    const _index = this.conditionIndex++;
    this.conditionNumber.splice(index + 1, 0, _index);
    this.refreshConditionMap();
  }

  delCondition(index: number) {
    this.conditionNumber.splice(index, 1);
    this.refreshConditionMap();
  }

  setCsVal(obj, type?: string, _index?: number) {
    const that = this;
    const data = [];
    for (let i = 0; i < obj.length; i++) {
      data.push({field: obj[i].attr_id, comparison: obj[i].attr_oper, content: [obj[i].attr_val1, obj[i].attr_val2]});
    }
      that.conditionNumber = [];
      if (isArray(data)) {
        data.forEach((item, index) => {
          that.conditionNumber.push(index);
        });
        setTimeout(function () {
          that.refreshCMap(data, type, _index);
        }, 100);
      }
      that.isOr = false;
      that.andOrTitle = '且';
  }

  setConditionsVal(obj, type?: string, _index?: number) {
    const that = this;
    if (isObject(obj)) {
      const data = obj.conditions;
      that.conditionNumber = [];
      if (isArray(data)) {
        data.forEach((item, index) => {
          that.conditionNumber.push(index);
        });
        setTimeout(function () {
          that.refreshConditionMap(data, type, _index);
        }, 100);
      }
      const relation = obj.relation;
      if (relation === 'and') {
        that.isOr = false;
        that.andOrTitle = '且';
      } else {
        that.isOr = true;
        that.andOrTitle = '或';
      }
    }
  }

  clearConditionsVal() {
    const that = this;
    that.conditionNumber = [];
    setTimeout(function () {
      that.conditionNumber = [0];
      that.refreshConditionMap();
    }, 100);
  }

  toggleAndOrTitle() {
    this.isOr = !this.isOr;
    if (this.isOr) {
      this.andOrTitle = '或';
    } else {
      this.andOrTitle = '且';
    }
  }
}
