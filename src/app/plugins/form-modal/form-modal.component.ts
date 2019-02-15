import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormModalService } from './form-modal.service';
import { FormGroup } from '@angular/forms';
import { ControlComponent } from './control/control.component';

@Component({
  selector: 'xma-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css'],
  providers: [FormModalService]
})
export class FormModalComponent implements OnInit {
  @ViewChild('modalControl', { read: ControlComponent }) _modalControl: ControlComponent;
  /**
   * 设置传入的模态框配置
   * @param itme 配置项
   **/
  @Input()
  set configurationormModal(itme: any) {
    this.title = itme.title;
    this.isShowDrawerOrModal = itme.modalType;
    this.footerButtons = itme.footerButtons;
    this.subtitle = itme.subtitle;
    this.nzWidth = itme.width;
  }
  /**
   * 传入模态框的内部内容配置
   **/
  @Input() public controls: any;
  form: FormGroup;
  visible = false;
  title: string;
  subtitle: string;
  isShowDrawerOrModal: string;
  footerButtons: any;
  nzWidth: number;
  constructor(
    public formModalService: FormModalService
  ) { }

  ngOnInit() {
    this.form = this.formModalService.createFormGroup(this.controls);
  }
  open(obj?): void {
    this.visible = true;
    if (obj) {
      this._modalControl.setValue(obj);
    }
  }

  close(): void {
    this.visible = false;
  }
  submit(): void {
    this.visible = false;
  }
  onClickBtn(eventNmae: string) {
    if (eventNmae === 'close') {
      this._modalControl.cleanValue();
      this.close();
    } else if (eventNmae === 'submit') {
      this._modalControl.submitForm();
    }
  }
  /**
   * 提交表单
   * @param fd 获取表单填写内容
  **/
  onSubmit (fd) {
    console.log(fd);
  }
}
