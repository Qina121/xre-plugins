import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild, Renderer, ElementRef } from '@angular/core';
import { ConditionService } from './condition.service';
import { ConditionContentType } from '../../../core/common/condition-content-type';
import { SelectComponent } from '../../select2/select/select.component';
import { isUndefined } from 'util';
import { SmartGroupDao } from '../../../core/dao/smart-group.dao';
import { SelectTreeService } from '../../select-tree/select-tree.service';
import { TreeviewComponent } from '../../select-tree/lib/treeview.component';
import { differenceInCalendarDays, format } from 'date-fns';
import { FormModalService } from '../../../plugins/form-modal/form-modal.service';
import * as _ from 'lodash';
@Component({
  selector: 'xma-cascade-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css'],
  providers: [
    SelectTreeService
  ]
})
export class ConditionComponent implements OnInit, AfterViewInit {
   /** init data */
   nzOptions = [];
   /** ngModel value */
   public values: any[] = null;

   treeList = [];
   getSelectForm: any;


  private fieldId = '0';
  comparisonId = '0';
  comparison = [];
  comparisonVal;
  content = [];
  dropdownList = [];
  timeList = [{id: 'hour', text: '时'}, {id: 'minute', text: '分'}, {id: 'second', text: '秒'}];
  start = '';
  end = '';
  oneNum = '';
  comparisonType = ConditionContentType.INPUT;
  showSelect: boolean;
  dropdownTreeValue = [];
  list = [{
        text: 'Children', id: 1, collapsed: true, children: [
            { text: 'Baby 3-5', id: 11 },
            { text: 'Baby 6-8', id: 12 },
            { text: 'Baby 9-12', id: 13 }
        ]
    }];
  items: any;
  today = new Date();
  contentSelectTime: any;
  memberDefault;
  selective;
  @Input() fieldData = [];
  @Input() memberItems = [];
  @Input() memberName = [];
  @Input() comparisonMap = {};
  @Input() conditionIndex: number;
  @Input() SeleMemberSource;
  @Input() conditionNumber: number[];
  @Input() hasDelBtn = false;
  @Input() moduleType;
  @Input() memberdata;

  @ViewChild('dropdownTree') _dropdownTree: ElementRef;
  @ViewChild(TreeviewComponent) treeviewComponent: TreeviewComponent;
  @ViewChild('fieldDropDown', { read: SelectComponent }) fieldDropDown: SelectComponent;
  @ViewChild('contentDropDown', { read: SelectComponent }) contentDropDown: SelectComponent;
  @ViewChild('contentSelectTime', { read: SelectComponent }) _contentSelectTime: SelectComponent;
  @ViewChild('memberSrc', { read: SelectComponent }) memberSrc: SelectComponent;
  @Output() deleteCondition = new EventEmitter<number>();
  @Output() addCondition = new EventEmitter<number>();

  public constructor(
    private conditionService: ConditionService,
    private _FormControlService: FormModalService,
    private sgDao: SmartGroupDao,
    private sTreeService: SelectTreeService,
    private renderer: Renderer) {
  }

  ngOnInit(): void {
    const that = this;
    that.memberDefault = '';
    that.selective = false;
    if (that.fieldData.length > 0) {
        if (that.fieldData[0].id === '9000001') {
          that.memberDefault = '会员';
          that.fieldChange(that.fieldData[0]);
          that.selective = true;
        } else {
          that.memberDefault = '';
          that.selective = false;
        }
    }
  }


  ngAfterViewInit(): void {
  }

  disabledStartDate = (startValue: Date): boolean => {
    return differenceInCalendarDays(startValue, this.today) < 0;
  }
  attrChange(e) {
  }

  fieldChange(field) {
    const that = this;
    this.fieldId = field.id;
    that.comparison = that.conditionService.getComparisonData(field.ext);
    that.comparisonId = '0';
    that.comparisonType = ConditionContentType.INPUT;
    if (field.id === 'arg_view_web_time' || field.id === 'sum_view_web_time') {
      that.contentSelectTime = true;
    } else {
      that.contentSelectTime = false;
    }
  }
  changeCompany(val) {
    this.content[1] = val.id;
  }
  // 获取单个组件值的方法
  getMemberSource(e) {
    this._FormControlService.MemberSourceCategoryId = e.id;
  }

  clearComparison(item) {
    this.comparisonId = '0';
    this.content = [];
    this.comparisonType = ConditionContentType.INPUT;
  }
  processingData (obj: any) {
    const that = this;
    _.forEach(obj, function(value: any , key: any) {
      if (_.isArray(value.children)) {
        that.processingData(value.children);
      }
      if (value.children === [] || value.children === null) {
        value['isLeaf'] = true;
      }
    });
  }
  getComparisonType(ele) {
    const that = this;
    if (ele.selectedOptions[0]) {
      const type = ele.selectedOptions[0].attributes['comparison-type'];
      that.comparisonType = type ? type.value : ConditionContentType.INPUT;
      if (that.comparisonType === 'dropdown' || that.comparisonType === 'dropdown-tree') {
        that.sgDao.smartGroupV2Action.getDropdown(that.fieldId, function (msg) {
          if (msg.checkSuccess()) {
            that.dropdownList = msg.data;
            if (that.comparisonType === 'dropdown-tree') {
              that.processingData(that.dropdownList);
            }
          }
        });
      }
    }
  }
  // 工作流设置
  getCType(ele) {
    const that = this;
    if (ele.selectedOptions[0]) {
      const type = ele.selectedOptions[0].attributes['comparison-type'];
      // 此注释不要删除
      // that.comparisonType = type ? type.value : ConditionContentType.INPUT;
      if (that.comparisonType === 'dropdown' || that.comparisonType === 'dropdown-tree') {
        that.sgDao.smartGroupV2Action.getDropdown(that.fieldId, function (msg) {
          if (msg.checkSuccess()) {
            that.dropdownList = msg.data;
            if (that.comparisonType === 'dropdown-tree') {
              that.processingData(that.dropdownList);
            }
          }
        });
      }
    }
  }

  comparisonTypeChange(type) {
    const that = this;
     that.comparisonType = type;
    if (that.comparisonType === 'dropdown' || that.comparisonType === 'dropdown-tree') {
      that.sgDao.smartGroupV2Action.getDropdown(that.fieldId, function (msg) {
        if (msg.checkSuccess()) {
          if (that.comparisonType === 'dropdown-tree') {
            for (let i = 0; i < msg.data.length; i++) {
              const id = msg.data[i].id;
              const text = msg.data[i].text;
              delete(msg.data[i].id);
              delete(msg.data[i].text);
              msg.data[i].value = id;
              msg.data[i].label = text;
              if (msg.data[i].children !== null) {
                that.ergodicObject(msg.data[i]);
              }
            }
            that.nzOptions = msg.data;
            that.renderer.setElementStyle(that._dropdownTree.nativeElement, 'display', 'block');
          } else {
            that.dropdownList = msg.data;
            that.items =  msg.data;
          }
        }
      });
    }
  }
  // 遍历对象修改键名
  ergodicObject (obj) {
    const that = this;
    let childrenIndex;
    for (childrenIndex in obj.children) {
      if ( obj.children[childrenIndex] !== null) {
        const id = obj.children[childrenIndex].id;
        const text = obj.children[childrenIndex].text;
        delete(obj.children[childrenIndex].id);
        delete(obj.children[childrenIndex].text);
        obj.children[childrenIndex].value = id;
        obj.children[childrenIndex].label = text;
        that.ergodicObject(obj.children[childrenIndex]);
      }
    }
  }

  memberSrcfun() {
  }

  comparisonChange(ele: HTMLSelectElement) {
    this.content = [];
    this.start = '';
    this.end = '';
    this.getComparisonType(ele);
    if (this.comparisonId === '0') {
    }
  }
// 此处返回数据
  getConditionVal(value) {
    const that = this;
    let content: any;
    switch (that.comparisonType) {
      case ConditionContentType.EMPTY:
        content = [];
        break;
      case ConditionContentType.INPUT:
        content = [that.content + ''];
        break;
      case ConditionContentType.NUMBER:
        content = [that.oneNum + ''];
        break;
      case ConditionContentType.DATE:
      case ConditionContentType.DATETIME:
        content = [that.getNowFormatDate(that.content[0])];
        break;
      case ConditionContentType.NUMBER_RANGE:
        content = [that.start + '', that.end + ''];
        break;
      case ConditionContentType.DATE_RANGE:
      case ConditionContentType.DATETIME_RANGE:
        content = [that.getNowFormatDate(that.start), that.getNowFormatDate(that.end)];
        break;
      case ConditionContentType.DROPDOWN:
        content = that.contentDropDown.getItemIds();
        break;
      case ConditionContentType.DROPDOWN_TREE:
        content = that.values;
        break;
    }
    return {
      field: that.fieldId,
      comparison: that.comparisonId,
      content: content
    };
  }

 // 多级联动---------------------------
  public onChanges(values: any): void {
    // 处理真实数据
    // this.values = values;
    // 处理模拟数据
    const list = [];
    for (let n = 0; n < values.length; n++) {
      for (let i = 0; i < this.nzOptions.length; i++) {
        if (this.nzOptions[i].children !== null) {
          this.ergodic(this.nzOptions[i], values[n]);
        }
      }
    }
    this.values = this.removeDuplicatedItem(this.treeList);
  }
  // 数组去重
  removeDuplicatedItem(arr) {
      for (let i = 0; i < arr.length - 1; i++) {
           for (let j = i + 1; j < arr.length; j++) {
               if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                 j--;
               }
           }
      }
      return arr;
    }

   // 遍历处理模拟数据
   ergodic (obj, id) {
    const that = this;
    if (obj.value === id) {
      that.treeList.push(obj.label);
    }
    let childrenIndex;
    for (childrenIndex in obj.children) {
      if ( obj.children[childrenIndex] !== null) {
        that.ergodic(obj.children[childrenIndex], id);
      }
    }
  }


  // 工作流行为监控节点数据获取
  getCVal(value) {
    const that = this;
    let content: any;
    switch (that.comparisonType) {
      case ConditionContentType.EMPTY:
        content = [];
        break;
      case ConditionContentType.INPUT:
        content = that.content;
        break;
      case ConditionContentType.NUMBER:
        content = [that.oneNum + ''];
        break;
      case ConditionContentType.DATE:
      case ConditionContentType.DATETIME:
        content = [that.getNowFormatDate(that.content[0])];
        break;
      case ConditionContentType.NUMBER_RANGE:
        content = [that.start + '', that.end + ''];
        break;
      case ConditionContentType.DATE_RANGE:
      case ConditionContentType.DATETIME_RANGE:
        content = [that.getNowFormatDate(that.start), that.getNowFormatDate(that.end)];
        break;
      case ConditionContentType.DROPDOWN:
        content = that.contentDropDown.getItemIds();
        break;
      case ConditionContentType.DROPDOWN_TREE:
        content = value;
        break;
      case ConditionContentType.INPUT_SELECT:
        content = that.content;
        content[0] = content[0].toString();
        break;
    }
    return {
      attr_id: that.fieldId,
      attr_oper: that.comparisonId,
      attr_val1: content[0] || '',
      attr_val2: content[1] || '',
    };
  }
  delCurCondition() {
    this.deleteCondition.emit();
  }

  addCurCondition() {
    this.addCondition.emit();
  }

  setConditionVal(obj) {
    const that = this;
    if (!isUndefined(obj)) {
      const fieldId = obj['field'];
      const memAttr = obj['memAttr'];
      const memName = obj['memName'];
      const comparisonId = obj['comparison'];
      const content = obj['content'];
      that.fieldDropDown.setSelect2Val(fieldId);
      that.comparisonId = comparisonId;
      setTimeout(function () {
        let eleClass = '.form-modal-condition .cascade-condition select.comparisonSelect';
        switch (that.moduleType) {
          case 'memberSource':
            eleClass = '.form-modal-condition .cascade-condition select.memberSource';
            break;
          case 'memberProp':
            eleClass = '.form-modal-condition .cascade-condition select.memberProp';
            break;
          case 'orderProp':
            eleClass = '.form-modal-condition .cascade-condition select.orderProp';
            break;
          case 'goodsProp':
            eleClass = '.form-modal-condition .cascade-condition select.goodsProp';
            break;
          case 'marketProp':
            eleClass = '.form-modal-condition .cascade-condition select.marketProp';
            break;
        }
        const ele = document.querySelectorAll('.comparisonSelect')[that.conditionIndex] as HTMLSelectElement;
        if (ele) {
          that.getComparisonType(ele);
          that.setContent(content);
        }
      }, 100);
    }
  }
  // 工作流设值
  setCVal(obj) {
    const that = this;
    if (!isUndefined(obj)) {
      const fieldId = obj['field'];
      const comparisonId = obj['comparison'];
      const content = obj['content'];
      that.fieldDropDown.setSelect2Val(fieldId);
      that.comparisonId = comparisonId;
      setTimeout(function () {
        let eleClass = '.form-modal-condition .cascade-condition select.comparisonSelect';
        switch (that.moduleType) {
          case 'memberProp':
            eleClass = '.form-modal-condition .cascade-condition select.memberProp';
            break;
          case 'orderProp':
            eleClass = '.form-modal-condition .cascade-condition select.orderProp';
            break;
          case 'goodsProp':
            eleClass = '.form-modal-condition .cascade-condition select.goodsProp';
            break;
          case 'marketProp':
            eleClass = '.form-modal-condition .cascade-condition select.marketProp';
            break;
        }
        const ele = document.querySelectorAll(eleClass)[that.conditionIndex] as HTMLSelectElement;
        if (ele) {
          that.getCType(ele);
          that.setContent(content);
        }
      }, 100);
    }
  }

  setCompany(obj) {
  }

  setIncidentConditionVal(obj, index) {
    const that = this;
    if (!isUndefined(obj)) {
      const fieldId = obj['field'];
      const memSrc = obj['memSrc'];
      const memName = obj['memName'];
      const comparisonId = obj['comparison'];
      const content = obj['content'];
      that.fieldDropDown.setSelect2Val(fieldId);
      that.memberSrc.setSelect2Val(memSrc);
      that.memberSrc.setSelect2Val(memName);
      that.comparisonId = comparisonId;
      setTimeout(function () {
        const incident_ele = document.querySelectorAll('#incidentId-' + index + ' .cascade-condition select.comparisonSelect')
        [that.conditionIndex] as HTMLSelectElement;
        if (incident_ele) {
          that.getComparisonType(incident_ele);
          that.setContent(content);
        }
      }, 100);
    }
  }

  setMkIncidentConditionVal(obj, index) {
    const that = this;
    if (!isUndefined(obj)) {
      const fieldId = obj['field'];
      const memSrc = obj['memAttr'];
      const memName = obj['memName'];
      const comparisonId = obj['comparison'];
      const content = obj['content'];
      that.fieldDropDown.setSelect2Val(fieldId);
      that.memberSrc.setSelect2Val(memSrc);
      that.memberSrc.setSelect2Val(memName);
      that.comparisonId = comparisonId;
      setTimeout(function () {
        const mk_incident_ele = document.querySelectorAll('#mkIncidentId-' + index + ' .cascade-condition select.comparisonSelect')
        [that.conditionIndex] as HTMLSelectElement;
        if (mk_incident_ele) {
          that.getComparisonType(mk_incident_ele);
          that.setContent(content);
        }
      }, 100);
    }
  }

  getNowFormatDate(date) {
    let nowDate = '';
    if (date) {
      if (typeof date === 'string') {
        nowDate = date;
      } else {
        nowDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-'
          + ('0' + date.getDate()).slice(-2) + ' ' + ('0' + date.getHours()).slice(-2) + ':'
          + ('0' + date.getMinutes()).slice(-2) + ':'
          + ('0' + date.getSeconds()).slice(-2);
      }
    }
    return nowDate;
  }

  setContent(content) {
    const that = this;
    if (content) {
      switch (this.comparisonType) {
        case ConditionContentType.EMPTY:
          this.content = content;
          break;
        case ConditionContentType.INPUT:
        case ConditionContentType.SELECTTIME:
        case ConditionContentType.DATE:
        case ConditionContentType.DATETIME:
          this.content = content;
          break;
        case ConditionContentType.NUMBER:
          this.oneNum = content[0];
          break;
        case ConditionContentType.NUMBER_RANGE:
        case ConditionContentType.DATE_RANGE:
        case ConditionContentType.DATETIME_RANGE:
          this.start = content[0];
          this.end = content[1];
          break;
        case ConditionContentType.DROPDOWN:
          setTimeout(function () {
            that.contentDropDown.setMultipleVal(content);
          }, 200);
          break;
        case ConditionContentType.INPUT_DROPDOWN:

          break;
        case ConditionContentType.INPUT_SELECT:
          this.content = content;
          break;
      }
    }
  }

  // 区间开始数字输入
  startNumChange(e) {
    e.target.value = parseInt(this.start, 10);
    if (+this.start < 0) {
      e.target.value = 0;
    }
    if (this.end && this.start > this.end) {
      e.target.value = this.end;
    }
    this.start = e.target.value;
  }

  // 区间结束数字输入
  endNumChange(e) {
    e.target.value = parseInt(this.end, 10);
    if (+this.end < 0) {
      e.target.value = 0;
    }
    if (this.start && this.end < this.start) {
      e.target.value = this.start;
    }
    this.end = e.target.value;
  }

  oneNumChange(e) {
    e.target.value = parseInt(e.target.value, 10);
    this.oneNum = e.target.value < 0 ? 0 : e.target.value;
  }

}

