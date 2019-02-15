import {EventEmitter, Output} from '@angular/core';

export abstract class PanelBase {
  viewShow = true;
  nextPanel: PanelBase;
  prevPanel: PanelBase;
  @Output() panelShow: EventEmitter<any> = new EventEmitter();
  @Output() panelHide: EventEmitter<any> = new EventEmitter();

  getNext() {
    return this.nextPanel;
  }

  getPrev() {
    return this.prevPanel;
  }

  show() {
    this.viewShow = true;
    this.panelShow.emit(this);
  }

  hide() {
    this.viewShow = false;
    this.panelHide.emit(this);
  }

  next(next?: PanelBase) {
    const nextPanel = next || this.getNext();
    if (nextPanel) {
      this.nextPanel = nextPanel;
      nextPanel.prevPanel = this;
      this.hide();
      nextPanel.show();
    }
  }

  prev(prev?: PanelBase) {
    const prevPanel = prev || this.getPrev();
    if (prevPanel) {
      this.prevPanel = prevPanel;
      prevPanel.nextPanel = this;
      this.hide();
      prevPanel.show();
    }
  }

  toggle() {
    if (this.viewShow) {
      this.hide();
    } else {
      this.show();
    }
  }
}
