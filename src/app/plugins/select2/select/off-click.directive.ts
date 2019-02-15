import {Directive, HostListener, Input, OnInit, OnDestroy} from '@angular/core';

@Directive({
  selector: '[xmaOffClick]'
})

export class OffClickDirective implements OnInit, OnDestroy {
  /* tslint:disable */
  @Input('xmaOffClick') public offClickHandler: any;
  /* tslint:enable */
  @HostListener('click', ['$event'])
  public onClick($event: MouseEvent): void {
    $event.stopPropagation();
    const event = new Event('click');
    // 触发事件
    document.dispatchEvent(event);
    this.offClickHandler(true);
  }

  public ngOnInit(): any {
    setTimeout(() => {
      document.addEventListener('click', this.offClickHandler);
    }, 0);
  }

  public ngOnDestroy(): any {
    document.removeEventListener('click', this.offClickHandler);
  }
}
