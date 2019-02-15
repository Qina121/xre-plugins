import {
  Component, Input, Output, EventEmitter, ElementRef, OnInit, ViewChild, OnDestroy,
  AfterViewInit, AfterContentInit, OnChanges, SimpleChanges
} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {SelectItem} from './select-item';
import {stripTags} from './select-pipes';
import {OptionsBehavior} from './select-interfaces';
import {escapeRegexp} from './common';
import {FormGroup, FormBuilder} from '@angular/forms';
import {SelectService} from './select.service';
import {Subscription} from 'rxjs/Subscription';
import {isArray, isUndefined} from 'util';
import {GroupType} from '../../../core/common/group-type';
import { FormModalService } from '../../form-modal/form-modal.service';

@Component({
  selector: 'xma-select2',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})

export class SelectComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  @Output() previewMail = new EventEmitter<any>();
  @Input() public name = '';
  @Input() public allowClear = false;
  @Input() public placeholder = '-请选择-';
  @Input() public idField = 'id';
  @Input() public textField = 'text';
  @Input() public multiple = false;
  @Input() public showEye: boolean;
  @Input() public loading = '加载中...';
  @Input() public isDefaultSort = true;
  @Input() public isShowLoadTxt = false;
  @Input() public form: FormGroup;
  @Input() selective;
  @ViewChild('sel') _sel: ElementRef;
  isShowSelLoading = false;
  emailId: string;

  @Input()
  public set items(value: Array<any>) {
    this._itemOptions = value;
    if (!value) {
      this._items = this.itemObjects = [];
    } else {
      this._items = value.filter((item: any) => {
        // if ((typeof item === 'string' && item) || (typeof item === 'object' && item && item.text && item.id)) {
        if ((typeof item === 'string') || (typeof item === 'object' && item.text)) {
          return item;
        }
      });
      /*this.itemObjects = this._items.map((item: any) => (typeof item === 'string' ? new SelectItem(item) : new SelectItem({
       id: item[this.idField],
       text: item[this.textField]
       })));*/
      this.itemObjects = this._items.map((item: any) => new SelectItem(item));
    }
  }

  public get items() {
    const items = this._itemOptions.filter((item: any) => {
      if ((typeof item === 'string') || (typeof item === 'object' && item.text)) {
        return item;
      }
    });
    return items.map((item: any) => new SelectItem(item));
  }

  @Input()
  public set disabled(value: boolean) {
    this._disabled = value;
    if (this._disabled === true) {
      this.hideOptions();
    }
  }

  public get disabled(): boolean {
    return this._disabled;
  }

  @Input()
  public set active(selectedItems: Array<any>) {
    if (!selectedItems || selectedItems.length === 0) {
      this._active = [];
    } else {
      const areItemsStrings = typeof selectedItems[0] === 'string';
      this._active = selectedItems.map((item: any) => {
        const data = areItemsStrings
          ? item
          : {id: item[this.idField], text: item[this.textField]};

        return new SelectItem(data);
      });
    }
  }

  @Output() public data: EventEmitter<any> = new EventEmitter();
  @Output() public selected: EventEmitter<any> = new EventEmitter();
  @Output() public removed: EventEmitter<any> = new EventEmitter();
  @Output() public typed: EventEmitter<any> = new EventEmitter();
  @Output() public opened: EventEmitter<any> = new EventEmitter();

  public options: Array<SelectItem> = [];
  public itemObjects: Array<SelectItem> = [];
  public activeOption: SelectItem;
  public element: ElementRef;

  public get active(): Array<any> {
    return this._active;
  }

  private set optionsOpened(value: boolean) {
    this._optionsOpened = value;
    this.opened.emit(value);
  }

  private get optionsOpened(): boolean {
    return this._optionsOpened;
  }

  private inputMode = false;
  private isShowChild = false;
  private _optionsOpened = false;
  private behavior: OptionsBehavior;
  private inputValue = '';
  private _items: Array<any> = [];
  private _itemOptions: Array<any> = [];
  private _disabled = false;
  private _active: Array<SelectItem> = [];
  loadSub: Subscription;
  clearSub: Subscription;
  setVal: Subscription;

  public constructor(element: ElementRef, private sanitizer: DomSanitizer, private fd: FormBuilder,
                     private selectService: SelectService, public _FormControlService: FormModalService, ) {
    this.element = element;
    this.clickedOutside = this.clickedOutside.bind(this);
    this.loadSub = selectService.selectLoad$.subscribe(data => {
      this.isShowSelLoading = data;
    });
    this.clearSub = selectService.selectClear$.subscribe(data => {

    });
    this.setVal = selectService.setSelectVal$.subscribe(data => {
      this.open();
      this.selectMatch(data);
    });
  }

  toggle(ele) {
    this.isShowChild = !this.isShowChild;
    if (ele.nextElementSibling.style.display === ('' || 'none')) {
      ele.nextElementSibling.style.display = 'block';
    } else {
      ele.nextElementSibling.style.display = 'none';
    }
  }

  getItems() {
    return this.active;
  }

  getItemIds() {
    const items = this.getItems();
    const arr = [];
    items.forEach(item => {
      arr.push(item.id);
    });
    return arr;
  }

  clearVal() {
    this.active = [];
  }

  setItems() {

  }

  ngOnDestroy() {
    this.loadSub.unsubscribe();
    this.clearSub.unsubscribe();
    this.setVal.unsubscribe();
  }

  identify(obj: any) {
    const strKey = obj.id;
    const content = obj.text;
    const count = obj.ext ? obj.ext : '';
    const len = strKey.length;
    if (len === 33) {
      const type = strKey.charAt(len - 1);
      let iconImg, typeTxt;
      if (type === GroupType.SMARTGROUP.name) {
        iconImg = `<i class="${GroupType.SMARTGROUP.icon}"></i>  `;
        typeTxt = GroupType.SMARTGROUP.title;
      } else if (type === GroupType.FIXEDGROUP.name) {
        iconImg = `<i class="${GroupType.FIXEDGROUP.icon}"></i>  `;
        typeTxt = GroupType.FIXEDGROUP.title;
      }
      return `<span title="${typeTxt}">${iconImg}${content}<span style="float: right;">${count}</span></span>`.toString();
    } else {
      return obj.text;
    }
  }

  public sanitize(obj: any): SafeHtml {
    this.emailId = obj.id;
    const html = this.identify(obj);
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  getPlaceholder(data: string) {
    if (data) {
      return data;
    } else {
      return this.active.length <= 0 ? this.placeholder : '-请选择-';
    }
  }

  public inputEvent(e: any, isUpMode: boolean = false): void {
    // tab
    if (e.keyCode === 9) {
      return;
    }
    if (isUpMode && (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 38 ||
      e.keyCode === 40 || e.keyCode === 13)) {
      e.preventDefault();
      return;
    }
    // backspace
    if (!isUpMode && e.keyCode === 8) {
      const el: any = this.element.nativeElement
        .querySelector('div.ui-select-container > input');
      if (!el.value || el.value.length <= 0) {
        if (this.active.length > 0) {
          this.remove(this.active[this.active.length - 1]);
        }
        e.preventDefault();
      }
    }
    // esc
    if (!isUpMode && e.keyCode === 27) {
      this.hideOptions();
      this.element.nativeElement.children[0].focus();
      e.preventDefault();
      return;
    }
    // del
    if (!isUpMode && e.keyCode === 46) {
      if (this.active.length > 0) {
        this.remove(this.active[this.active.length - 1]);
      }
      e.preventDefault();
    }
    // left
    if (!isUpMode && e.keyCode === 37 && this._items.length > 0) {
      this.behavior.first();
      e.preventDefault();
      return;
    }
    // right
    if (!isUpMode && e.keyCode === 39 && this._items.length > 0) {
      this.behavior.last();
      e.preventDefault();
      return;
    }
    // up
    if (!isUpMode && e.keyCode === 38) {
      this.behavior.prev();
      e.preventDefault();
      return;
    }
    // down
    if (!isUpMode && e.keyCode === 40) {
      this.behavior.next();
      e.preventDefault();
      return;
    }
    // enter
    if (!isUpMode && e.keyCode === 13) {
      if (this.active.indexOf(this.activeOption) === -1) {
        this.selectActiveMatch();
        this.behavior.next();
      }
      e.preventDefault();
      return;
    }
    const target = e.target || e.srcElement;
    if (target && target.value) {
      this.inputValue = target.value;
      this.behavior.filter(new RegExp(escapeRegexp(this.inputValue), 'ig'));
      this.doEvent('typed', this.inputValue);
    }
  }

  public ngOnInit(): any {
    this.behavior = (this.firstItemHasChildren) ?
      new ChildrenBehavior(this) : new GenericBehavior(this);

    const form = this.form;
    if (typeof form === 'undefined') {
      this.form = this.fd.group({
        [this.name]: ''
      });
    }
    this._FormControlService.selectModal = this;
  }

  ngAfterViewInit(): void {
    // console.log(this.options);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setSelectVal();
  }

  setSelectVal() {
    this.itemObjects.forEach(option => {
      if (option.isSelect) {
        this.open();
        this.selectActive(option);
        this.selectMatch(option);
      }
    });
  }

  setCurVal(item: any) {
    this.open();
    this.selectActive(item);
    this.selectMatch(item);
  }

  setSelect2Val(id: any) {
    const that = this;
    // console.log(that.itemObjects);
    that.itemObjects.forEach(option => {
      if (option.hasChildren()) {
        option.children.forEach(item => {
          if (item.id === id) {
            that.open();
            that.selectActive(item);
            that.selectMatch(item);
          }
        });
      } else {
        if (option.id === id) {
          that.open();
          that.selectActive(option);
          that.selectMatch(option);
        }
      }
    });
  }

  // setReportForm(obj, id) {
  //   const that = this;
  //   console.log(obj);
  //   const itemObjects = obj.map((item: any) => new SelectItem(item));
  //   itemObjects.forEach(option => {
  //     console.log(option);
  //     if (option.id === id) {
  //       that.open();
  //       that.selectActive(option);
  //       that.selectMatch(option);
  //     }
  //   });
  // }

  setMultipleVal(arrId) {
    // console.log(arrId);
    const that = this;
    that.active = [];
    that.itemObjects.forEach(option => {
      if (option.hasChildren()) {
        arrId.forEach(id => {
          option.children.forEach(item => {
            if (item.id === id) {
              that.open();
              that.selectActive(item);
              that.selectMatch(item);
            }
          });
        });
      } else {
        // console.log(option);
        // 此处还需再修改
        if (option.text === arrId) {
        that.active.push(option);
        }
        arrId.forEach(id => {
          if (option.id === id) {
            that.active.push(option);
          }
          if (option.text === id) {
            that.active.push(option);
          }
        });
      }
    });
  }

  public remove(item: SelectItem): void {
    if (this._disabled === true) {
      return;
    }
    if (this.multiple === true && this.active) {
      const index = this.active.indexOf(item);
      this.active.splice(index, 1);
      this.data.next(this.active);
      this.doEvent('removed', item);
      const activeArr = [];
      this.active.map(curItem => {
        activeArr.push(curItem.id);
      });
      const activeArrStr = activeArr.join();
      this._sel.nativeElement.value = activeArrStr;
      this.form.controls[this.name].setValue(activeArrStr);
    }
    if (this.multiple === false) {
      this.active = [];
      this.data.next(this.active);
      this.doEvent('removed', item);
      this._sel.nativeElement.value = '';
      this.form.controls[this.name].setValue('');
    }
    if (item.parent) {
      this.itemObjects.forEach(obj => {
        if (obj.text === item.parent.text) {
          if (!obj.children.includes(item)) {
            obj.children.push(item);
          }
        }
      });
    }
    this.open();
  }

  public doEvent(type: string, value: any): void {
    if ((this as any)[type] && value) {
      (this as any)[type].next(value);
    }
  }

  public clickedOutside(isOpen): void {
    this.inputMode = false;
    this.optionsOpened = !isOpen.type;
    // console.log(this.optionsOpened);
    for (let i = 0; i < this.active.length; i++) {
      if (this.active[i].text === '全部') {
        this.optionsOpened = false;
      }
      // else {
      //   this.optionsOpened = true;
      // }
    }

  }

  public get firstItemHasChildren(): boolean {
    return this.itemObjects[0] && this.itemObjects[0].hasChildren();
  }

  public isHasChild(item): boolean {
    return item.hasChildren();
  }

  public get itemHasChildren(): boolean {
    const arr = [];
    this.itemObjects.forEach(item => {
      if (item.hasChildren()) {
        arr.push(item);
      }
    });
    return arr.length > 0;
  }

  protected matchClick(e: any): void {
    // e.stopPropagation();
    // e.cancelBubble = true;
    if (this._disabled === true) {
      return;
    }
    this.inputMode = !this.inputMode;
    if (this.inputMode === true && ((this.multiple === true && e) || this.multiple === false)) {
      this.focusToInput('', this.inputMode);

      // console.log(this.active);
      // if (this.active.length > 0) {
      //   for (let i = 0; i < this.active.length; i++) {
      //     if (this.active[i].text === '全部') {
      //     } else {
      //       this.open();
      //     }
      //   }
      // } else {
      //   this.open();
      // }

      this.open();
    }
  }

  protected  mainClick(event: any): void {
    if (this.inputMode === true || this._disabled === true) {
      return;
    }
    if (event.keyCode === 46) {
      event.preventDefault();
      this.inputEvent(event);
      return;
    }
    if (event.keyCode === 8) {
      event.preventDefault();
      this.inputEvent(event, true);
      return;
    }
    if (event.keyCode === 9 || event.keyCode === 13 ||
      event.keyCode === 27 || (event.keyCode >= 37 && event.keyCode <= 40)) {
      event.preventDefault();
      return;
    }
    this.inputMode = true;
    const value = String
      .fromCharCode(96 <= event.keyCode && event.keyCode <= 105 ? event.keyCode - 48 : event.keyCode)
      .toLowerCase();
    this.focusToInput(value);
    this.open();
    const target = event.target || event.srcElement;
    target.value = value;
    this.inputEvent(event);
  }

  protected  selectActive(value: SelectItem): void {
    this.activeOption = value;
  }

  protected  isActive(value: SelectItem): boolean {
    if (this.activeOption) {
      return this.activeOption.text === value.text;
    } else {
      return false;
    }
  }

  private focusToInput(value: string = '', inputMode?: boolean): void {
    setTimeout(() => {
      this.inputMode = inputMode;
      setTimeout(() => {
        const el = this.element.nativeElement.querySelector('div.ui-select-container > input');
        if (el) {
          el.focus();
          el.value = value;
        }
      }, 100);
    }, 0);
  }

  private selectAllVal(): void {

  }

  private open(): void {
    const that = this;
    this.options = this.itemObjects
      .filter((option: SelectItem) => {
        if (option.children) {
          option.children = option.children.filter(child => {
            let bool = false;
            that.active.forEach((o: SelectItem) => {
              if (o.parent) {
                bool = child.text === o.text;
              }
            });
            return !bool;
          });
          return option.children.length > 0;
        } else {
          return (this.multiple === false ||
          this.multiple === true && !this.active.find((o: SelectItem) => option.text === o.text));
        }
      });

    // 按照字母排序
    /*if (isArray(this.options) && this.options.length > 0) {
      if (this.isDefaultSort || isUndefined(this.isDefaultSort)) {
        this.options = this.options.sort((previous: any, current: any) => {
          return previous['text'] > current['text'] ? 1 : -1;
        });
      }
    }*/

    if (this.options.length > 0) {
      // this.behavior.first();
    }
    this.optionsOpened = true;
  }

  private hideOptions(): void {
    this.inputMode = false;
    this.optionsOpened = false;
  }

  private selectActiveMatch(): void {
    this.selectMatch(this.activeOption);
  }

  private selectMatch(value: SelectItem, e: Event = void 0): void {
    // console.log(value);
    // console.log(e);
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    if (this.options.length <= 0) {
      return;
    }
    if (this.multiple === true) {
      this.active.push(value);
      this.data.next(this.active);
      const activeArr = [];
      this.active.map(item => {
        // console.log(item);
        activeArr.push(item.id);
      });
      const activeArrStr = activeArr.join('$$');
      this._sel.nativeElement.value = activeArrStr;
      this.form.controls[this.name].setValue(activeArrStr);
    }
    if (this.multiple === false) {
      this.active[0] = value;
      this.data.next(this.active[0]);
      this._sel.nativeElement.value = value.id;
      this.form.controls[this.name].setValue(value.id);
      this.itemObjects = this.items;
    }
    this.doEvent('selected', value);
    this.hideOptions();
    if (this.multiple === true) {
      this.focusToInput('');
    } else {
      this.focusToInput(stripTags(value.text + ''));
      this.element.nativeElement.querySelector('.ui-select-container').focus();
    }
  }

  //  // 预览邮件
   preview (tem) {
    this.previewMail.emit(this.emailId);
  }
}

export class Behavior {
  public optionsMap: Map<string, number> = new Map<string, number>();

  public actor: SelectComponent;

  public constructor(actor: SelectComponent) {
    this.actor = actor;
  }

  public fillOptionsMap(): void {
    this.optionsMap.clear();
    let startPos = 0;
    this.actor.itemObjects
      .map((item: SelectItem) => {
        startPos = item.fillChildrenHash(this.optionsMap, startPos);
      });
  }

  public ensureHighlightVisible(optionsMap: Map<string, number> = void 0): void {
    const container = this.actor.element.nativeElement.querySelector('.ui-select-choices-content');
    if (!container) {
      return;
    }
    const choices = container.querySelectorAll('.ui-select-choices-row');
    if (choices.length < 1) {
      return;
    }
    const activeIndex = this.getActiveIndex(optionsMap);
    if (activeIndex < 0) {
      return;
    }
    const highlighted: any = choices[activeIndex];
    if (!highlighted) {
      return;
    }
    const posY: number = highlighted.offsetTop + highlighted.clientHeight - container.scrollTop;
    const height: number = container.offsetHeight;
    if (posY > height) {
      container.scrollTop += posY - height;
    } else if (posY < highlighted.clientHeight) {
      container.scrollTop -= highlighted.clientHeight - posY;
    }
  }

  private getActiveIndex(optionsMap: Map<string, number> = void 0): number {
    let ai = this.actor.options.indexOf(this.actor.activeOption);
    if (ai < 0 && optionsMap !== void 0) {
      ai = optionsMap.get(this.actor.activeOption.id);
    }
    return ai;
  }
}

export class GenericBehavior extends Behavior implements OptionsBehavior {
  public constructor(actor: SelectComponent) {
    super(actor);
  }

  public first(): void {
    this.actor.activeOption = this.actor.options[0];
    super.ensureHighlightVisible();
  }

  public last(): void {
    this.actor.activeOption = this.actor.options[this.actor.options.length - 1];
    super.ensureHighlightVisible();
  }

  public prev(): void {
    const index = this.actor.options.indexOf(this.actor.activeOption);
    this.actor.activeOption = this.actor
      .options[index - 1 < 0 ? this.actor.options.length - 1 : index - 1];
    super.ensureHighlightVisible();
  }

  public next(): void {
    const index = this.actor.options.indexOf(this.actor.activeOption);
    this.actor.activeOption = this.actor
      .options[index + 1 > this.actor.options.length - 1 ? 0 : index + 1];
    super.ensureHighlightVisible();
  }

  public filter(query: RegExp): void {
    const options = this.actor.itemObjects
      .filter((option: SelectItem) => {
        return stripTags(option.text).match(query) &&
          (this.actor.multiple === false ||
          (this.actor.multiple === true && this.actor.active.map((item: SelectItem) => item.id).indexOf(option.id) < 0));
      });
    this.actor.options = options;
    if (this.actor.options.length > 0) {
      this.actor.activeOption = this.actor.options[0];
      super.ensureHighlightVisible();
    }
  }
}

export class ChildrenBehavior extends Behavior implements OptionsBehavior {
  public constructor(actor: SelectComponent) {
    super(actor);
  }

  public first(): void {
    this.actor.activeOption = this.actor.options[0].children[0];
    this.fillOptionsMap();
    this.ensureHighlightVisible(this.optionsMap);
  }

  public last(): void {
    this.actor.activeOption =
      this.actor
        .options[this.actor.options.length - 1]
        .children[this.actor.options[this.actor.options.length - 1].children.length - 1];
    this.fillOptionsMap();
    this.ensureHighlightVisible(this.optionsMap);
  }

  public prev(): void {
    const indexParent = this.actor.options
      .findIndex((option: SelectItem) => this.actor.activeOption.parent && this.actor.activeOption.parent.id === option.id);
    const index = this.actor.options[indexParent].children
      .findIndex((option: SelectItem) => this.actor.activeOption && this.actor.activeOption.id === option.id);
    this.actor.activeOption = this.actor.options[indexParent].children[index - 1];
    if (!this.actor.activeOption) {
      if (this.actor.options[indexParent - 1]) {
        this.actor.activeOption = this.actor
          .options[indexParent - 1]
          .children[this.actor.options[indexParent - 1].children.length - 1];
      }
    }
    if (!this.actor.activeOption) {
      this.last();
    }
    this.fillOptionsMap();
    this.ensureHighlightVisible(this.optionsMap);
  }

  public next(): void {
    const indexParent = this.actor.options
      .findIndex((option: SelectItem) => this.actor.activeOption.parent && this.actor.activeOption.parent.id === option.id);
    const index = this.actor.options[indexParent].children
      .findIndex((option: SelectItem) => this.actor.activeOption && this.actor.activeOption.id === option.id);
    this.actor.activeOption = this.actor.options[indexParent].children[index + 1];
    if (!this.actor.activeOption) {
      if (this.actor.options[indexParent + 1]) {
        this.actor.activeOption = this.actor.options[indexParent + 1].children[0];
      }
    }
    if (!this.actor.activeOption) {
      this.first();
    }
    this.fillOptionsMap();
    this.ensureHighlightVisible(this.optionsMap);
  }

  public filter(query: RegExp): void {
    const options: Array<SelectItem> = [];
    const optionsMap: Map<string, number> = new Map<string, number>();
    let startPos = 0;
    for (const si of this.actor.itemObjects) {
      if (si.children) {
        const children: Array<SelectItem> = si.children.filter((option: SelectItem) => query.test(option.text));
        startPos = si.fillChildrenHash(optionsMap, startPos);
        if (children.length > 0) {
          const newSi = si.getSimilar();
          newSi.children = children;
          options.push(newSi);
        }
      }
    }
    this.actor.options = options;
    if (this.actor.options.length > 0) {
      this.actor.activeOption = this.actor.options[0].children[0];
      super.ensureHighlightVisible(optionsMap);
    }
  }

}
