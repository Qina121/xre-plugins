import {Directive, ElementRef, Renderer} from '@angular/core';
import {IndividuationItem, IndividuationType} from '../model/individuation-item.model';

@Directive({
  selector: '[xrewin-img]'
})
export class XrewinImgDirective extends IndividuationItem {
  getIndividuationType(): IndividuationType {
    return IndividuationType.Img;
  }

  constructor(protected el: ElementRef,
              protected renderer: Renderer) {
    super(el, renderer);
  }
}
