import {isNullOrUndefined} from 'util';

export class AlertOption {
  title = '';
  text = '';
  type = '';
  iconType = '';
  cancleButton = '';
  allowOutsideClick = false;
  showConfirmButton = true;
  showCancelButton = false;
  closeOnConfirm = true;
  closeOnCancel = true;
  confirmButtonText = 'OK';
  confirmButtonColor = '#AEDEF4';
  cancelButtonText = 'Cancel';
  imageUrl = '';
  imageSize = 0;
  timer = 0;
  time: number = 2000;
  customClass = '';
  html = false;
  animation = true;
  allowEscapeKey = true;
  inputType = 'text';
  inputPlaceholder = '';
  inputValue = '';
  animateState = '';
  closeHandle: (x: any) => void;

  constructor(options: {
                title?: string,
                text?: string,
                type?: string,
                iconType?: string,
                cancleButton?: string,
                closeHandle?: (x: any) => void
              } = {}) {
    this.text = options.text || '';
    this.title = options.title || '';
    this.type = options.type || '';
    this.iconType = options.iconType || '';
    this.cancleButton = options.cancleButton || '';
    this.closeHandle = options.closeHandle;
    this.showCancelButton = !isNullOrUndefined(options.closeHandle);
  }

  confirm() {
    if (this.closeHandle) {
      this.closeHandle.call(this, true);
    }
  }

  cancel() {
    if (this.closeHandle) {
      this.closeHandle.call(this, false);
    }
  }

  prompt() {
    if (this.closeHandle) {
      if (this.closeHandle) {
        this.closeHandle.call(this, this.inputValue);
      }
    }
  }

  //更改animate 的参数 自动淡出
  animateoPtions() {
    return 'in';
  }

}
