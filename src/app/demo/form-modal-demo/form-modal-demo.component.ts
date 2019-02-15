import { Component, OnInit, ViewChild } from '@angular/core';
import { FormModalComponent } from '../../plugins/form-modal/form-modal.component';
import { ControlBase } from '../../plugins/form-modal/model/control-base';
import { TextboxControl } from '../../plugins/form-modal/model/control-textbox';
import { RangeDateTime } from '../../plugins/form-modal/model/control-rangedatatime';
import { MemberConditions } from '../../plugins/form-modal/model/control-member-conditions';
import { Tabs } from '../../plugins/form-modal/model/control-tabs';
import { SmartGroupDao } from '../../core/dao/smart-group.dao';
import { TextDropdownControl } from '../../plugins/form-modal/model/control-textDropdown';
import { RadioControl } from '../../plugins/form-modal/model/control-radio';

@Component({
  selector: 'xma-form-modal-demo',
  templateUrl: './form-modal-demo.component.html',
  styleUrls: ['./form-modal-demo.component.css']
})
export class FormModalDemoComponent implements OnInit {
  @ViewChild('formModal') _formModal: FormModalComponent;
  conditionsData: any;
  listOption: [
    {label: '第一个邮件', value: '第一个邮件'},
    {label: '第二个邮件', value: '第二个邮件'},
    {label: '第三个邮件', value: '第三个邮件'}
  ];
  configurationormModal = {
    modalType: 'modal',
    title: '请选择以下节点进行操作',
    subtitle: '请填写好相应内容',
    width: '800',
    footerButtons: [
      {
        text: '取消',
        state: false,
        style: {marginRight: '8px'},
        eventNmae: 'close',
      },
      {
        text: '保存',
        state: false,
        style: {marginRight: '8px', background: '#1ab394', color: '#fff'},
        eventNmae: 'submit',
      },
      {
        text: '发送',
        state: false,
        style: {background: '#1ab394', color: '#fff'},
        eventNmae: 'submit',
      }
    ]
  };
  // 配置右侧模态框------------------------------------
  filters = [{
    key: 'icon-filter',
    value: '筛选',
    icon: 'icon-filter',
    selected: true,
    handle: '',
    isDisable: false
  }, {
    key: 'icon-plus',
    value: '合并',
    icon: 'icon-plus',
    selected: false,
    handle: '',
    isDisable: false
  }, {
    key: 'icon-minus',
    value: '剔除',
    icon: 'icon-minus',
    selected: false,
    handle: '',
    isDisable: false
  }];


  controls: ControlBase<any>[] = [
    new TextboxControl({
      required: true,
      key: 'name',
      label: '任务名称',
      value: '',
      order: 1
    }),
    new TextboxControl({
      required: true,
      key: 'mail',
      label: '邮件主题',
      value: '',
      order: 2
    }),
    new TextboxControl({
      required: true,
      key: 'send_name',
      label: '发件人名称',
      value: '',
      order: 3
    }),
    new TextboxControl({
      required: true,
      key: 'send_address',
      label: '发件人地址',
      value: '',
      order: 4
    }),
    new TextDropdownControl({
      required: true,
      key: 'select_content',
      label: '选择邮件内容',
      holder: '请选择邮件',
      value: '',
      list: [
        {key: 'select_content1', label: '第三方的那款是个', value: 'a'},
        {key: 'select_content2', label: '广东省收到货', value: 'b'},
        {key: 'select_content3', label: '烧烤火锅开始感慨', value: 'c'},
        {key: 'select_content4', label: '一天的公司的更好', value: 'd'}],
      order: 5
    }),
    new TextDropdownControl({
      required: true,
      key: 'sele_group',
      label: '目标人群',
      holder: '请选择分组',
      value: '',
      order: 6,
      list: [
        {label: '第三方的那款是个', value: 'a'},
        {label: '广东省收到货', value: 'b'},
        {label: '烧烤火锅开始感慨', value: 'c'},
        {label: '一天的公司的更好', value: 'd'}],
    }),
    new RadioControl({
      required: true,
      key: 'send_time',
      label: '发送时间',
      value: '',
      order: 7
    }),
  ];
  // ------------------------------------


  // 配置中心模态框----------------------
  // controls: ControlBase<any>[] = [
  //   new Tabs({
  //     nzTabPosition: 'left',
  //   })
  // ];
// ----------------------


  constructor(private sgDao: SmartGroupDao) { }

  ngOnInit() {
    const that = this;
      that.sgDao.smartGroupAction.getMemberCondition(function (data: any) {
        that.conditionsData = data.data;
        // 配置右侧模态框------------------------------------
        // that.controls.push(new MemberConditions({
        //   required: false,
        //   key: 'memberc_onditions',
        //   buttons: that.filters,
        //   labels: ['会员来源', '会员属性', '订单属性', '商品属性', '营销属性'],
        //   moduleTypes: ['memberSrc', 'memberProp', 'orderProp', 'goodsProp', 'marketProp'],
        //   conditions: [that.conditionsData.memberSrc,
        //               that.conditionsData.memberProp,
        //               that.conditionsData.orderProp,
        //               that.conditionsData.goodsProp,
        //               that.conditionsData.marketProp]
        // }));
        // ------------------------------------
      });
  }
  open() {
    const obj = {
      name: '14',
      remarks: '13',
      valid_time: ['Thu Jan 24 2019 11:54:39 GMT+0800 (中国标准时间)', 'Wed Feb 20 2019 11:54:39 GMT+0800 (中国标准时间)'],
      memberProp: {conditions: [
        {
          comparison: '5',
          content: ['14'],
          field: '1001'
        },
        {
          comparison: '5',
          content: ['14'],
          field: '1001'
        }
      ], relation: 'and'}
    };
    this._formModal.open(obj);
  }

}
