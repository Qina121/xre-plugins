/**
 * Created by fight on 2017/2/16.
 */

import {ElementRef, Renderer, HostListener, OnInit, OnDestroy} from '@angular/core';
import {ElementUtilsService} from '../service/element-utils.service';
import {DynamicComponent} from '../../plugins/dynamic/dynamic.component';
import {IndividuationSubjectService} from '../service/individuation-subject.service';
import {Subscription} from 'rxjs/Subscription';

export enum IndividuationType {
  Img,
  Text
}

export abstract class IndividuationItem implements OnInit, OnDestroy {
  protected abstract el: ElementRef;
  protected elUtils: ElementUtilsService;
  protected abstract renderer: Renderer;
  protected tmplCom: DynamicComponent;
  protected subjectService: IndividuationSubjectService;
  protected subscription: Subscription;
  protected individuationSetting: any;

  constructor(el: ElementRef,
              renderer: Renderer) {
    // this.el = el;
    // this.renderer = renderer;
    this.elUtils = new ElementUtilsService(el, renderer);
    this.subjectService = IndividuationSubjectService.getInstance();
    this.subscription = this.subjectService.tmplComponent.subscribe(tmplCom => {
      this.tmplCom = tmplCom;
    });
  }

  ngOnInit(): void {
    this.tmplCom.initItem.emit(this);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('click') click() {
    this.tmplCom.clickItem.emit(this);
  }

  @HostListener('dblclick') dblclick() {
    this.tmplCom.dblclickItem.emit(this);
  }

  select() {
    ElementUtilsService.selectItem(this.el.nativeElement);
  }

  unSelect() {
    ElementUtilsService.unSelectItem(this.el.nativeElement);
  }

  setIndividuationKey(key: string) {
    this.el.nativeElement.setAttribute('individuation-key', key);
    this.elUtils.addBorder('1px solid blue', 1, 1);
  }

  getIndividuationKey(): string {
    // this.elUtils.removeBorder(1, 1);
    return this.el.nativeElement.getAttribute('individuation-key');
  }

  clearIndividuationKey() {
    this.elUtils.removeBorder(1, 1);
    this.el.nativeElement.setAttribute('individuation-key', '');
  }

  getElement() {
    return this.el.nativeElement;
  }

  setSetting(setting: any) {
    this.individuationSetting = setting;
  }

  getSetting() {
    return this.individuationSetting;
  }

  getSrc() {
    return this.el.nativeElement.getAttribute('src');
  }

  abstract getIndividuationType(): IndividuationType;
}
