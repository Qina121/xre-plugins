/**
 * Created by fight on 2016/12/28.
 */
import {Injectable, ElementRef, Renderer} from '@angular/core';
import {isArray} from 'util';
import {UUID} from '../model/uuid.model';

const selectedClassName = 'indiv-item-selected';

/**
 * Element Dom Utils.
 *
 * @stable
 */
@Injectable()
export class ElementUtilsService {

  static createWrapSpan(individuationKey: string, bool?: boolean): HTMLElement {
    const active = document.createElement('span');
    active.setAttribute('contenteditable', 'false');
    active.setAttribute('individuation-text', '');
    active.setAttribute('individuation-key', individuationKey);
    if (bool) {
      active.setAttribute('class', 'indi-text');
    }
    return active;
  }

  static getSelectedText() {
    if (window.getSelection) {
      const sel = window.getSelection();
      return sel.toString().trim();
    }
    return '';
  }

  static wrapSelectedText(wrapEl: HTMLElement) {
    let sel, range;
    if (window.getSelection) {
      sel = window.getSelection();
      const innerText = sel.toString().trim();
      if (sel.rangeCount && innerText !== '') {
        range = sel.getRangeAt(0);
        range.deleteContents();
        wrapEl.innerHTML = innerText;
        range.insertNode(wrapEl);
      }
    }
  }

  static unWrapSelectedText(wrapEl: HTMLElement) {
    // 确认删除正确性
    wrapEl.setAttribute('delete-id', UUID.UUID32());
    wrapEl.parentElement.innerHTML = wrapEl.parentElement.innerHTML.replace(wrapEl.outerHTML, wrapEl.innerText);
  }


  static selectItem(item: HTMLElement) {
    if (item && !ElementUtilsService.isSelected(item)) {
      let spanElement = document.createElement('span');
      if (item.tagName.toLowerCase() === 'img') {
        spanElement = document.createElement('div');
        spanElement.style.height = (item.clientHeight + 6) + 'px';
        spanElement.style.width = (item.clientWidth + 6) + 'px';
        spanElement.style.margin = '0px auto';
      }
      spanElement.setAttribute('class', selectedClassName);
      item.parentElement.insertBefore(spanElement, item);
      spanElement.appendChild(item);
    }
  }

  static unSelectItem(item: HTMLElement) {
    if (ElementUtilsService.isSelected(item)) {
      const oldSelect = item.parentElement;
      const parent = item.parentElement.parentElement;
      parent.insertBefore(item, item.parentElement);
      parent.removeChild(oldSelect);
    }
  }

  static isSelected(item: HTMLElement): boolean {
    return item && item.parentElement && item.parentElement.getAttribute('class') === selectedClassName;
  }

  static sumBorder(number: any) {
    let sum = 0;
    if (!isArray(number)) {
      sum = number * 2;
    } else {
      for (const bw of number) {
        sum += bw;
      }
    }
    return sum;
  }

  constructor(protected el: ElementRef,
              protected renderer: Renderer) {

  }

  addBorder(border: string, borderWidth: any, borderHeight: any) {
    if (!this.el.nativeElement.style.border) {
      const width: number = ElementUtilsService.sumBorder(borderWidth);
      const height: number = ElementUtilsService.sumBorder(borderHeight);
      this.renderer.setElementStyle(this.el.nativeElement, 'box-sizing', 'content-box');
      this.renderer.setElementStyle(this.el.nativeElement, 'text-align', 'content');
      this.renderer.setElementStyle(this.el.nativeElement, 'border', border);
      this.renderer.setElementProperty(this.el.nativeElement, 'width', this.el.nativeElement.width - width);
      this.renderer.setElementProperty(this.el.nativeElement, 'height', this.el.nativeElement.height - height);
    }
  }

  removeBorder(borderWidth: any, borderHeight: any) {
    if (this.el.nativeElement.style.border) {
      const width: number = ElementUtilsService.sumBorder(borderWidth);
      const height: number = ElementUtilsService.sumBorder(borderHeight);
      this.renderer.setElementStyle(this.el.nativeElement, 'box-sizing', '');
      this.renderer.setElementStyle(this.el.nativeElement, 'text-align', '');
      this.renderer.setElementStyle(this.el.nativeElement, 'border', '');
      this.renderer.setElementProperty(this.el.nativeElement, 'width', this.el.nativeElement.width + width);
      this.renderer.setElementProperty(this.el.nativeElement, 'height', this.el.nativeElement.height + height);
    }
  }
}
