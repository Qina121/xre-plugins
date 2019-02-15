import {Directive, ElementRef, Renderer} from '@angular/core';
import {IndividuationItem, IndividuationType} from '../model/individuation-item.model';


@Directive({
  selector: '[individuation-text]'
})
export class IndividuationTextDirective extends IndividuationItem {
  getIndividuationType(): IndividuationType {
    return IndividuationType.Text;
  }

  constructor(protected el: ElementRef,
              protected renderer: Renderer) {
    super(el, renderer);
  }
}
