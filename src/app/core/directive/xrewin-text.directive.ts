import {Directive, ElementRef, Renderer} from '@angular/core';


@Directive({
  selector: '[xrewin-text]'
})
export class XrewinTextDirective {

  private selectStart = false;

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

}
