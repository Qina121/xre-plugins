import {
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
  SimpleChanges,
  AfterViewInit,
  OnInit,
  OnDestroy,
  OnChanges,
  ComponentFactory,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';
import {IHaveDynamicData, DynamicTypeBuilder} from './type.builder';
import {DynamicTemplateBuilder, TemplateType} from './template.builder';
import {IndividuationItem} from '../../core/model/individuation-item.model';

@Component({
  selector: 'xma-dynamic-template',
  styleUrls: ['./dynamic.component.css'],
  template: `
    <div [hidden]="!viewShow" class="dynamic-template">
      <ng-template #dynamicContentPlaceHolder></ng-template>
    </div>
  `,
})
export class DynamicComponent implements AfterViewInit, OnChanges, OnDestroy, OnInit {
  // trigger when the template shown
  @Output() shown: EventEmitter<any> = new EventEmitter();
  @Output() childInit: EventEmitter<any> = new EventEmitter();
  @Output() childViewInit: EventEmitter<any> = new EventEmitter();
  @Output() initItem: EventEmitter<IndividuationItem> = new EventEmitter();
  @Output() clickItem: EventEmitter<IndividuationItem> = new EventEmitter();
  @Output() dblclickItem: EventEmitter<IndividuationItem> = new EventEmitter();
  // reference for a <div> with #dynamicContentPlaceHolder
  @ViewChild('dynamicContentPlaceHolder', {read: ViewContainerRef})
  protected dynamicComponentTarget: ViewContainerRef;
  // this will be reference to dynamic content - to be able to destroy it
  protected componentRef: ComponentRef<IHaveDynamicData>;

  // until ngAfterViewInit, we cannot start (firstly) to process dynamic stuff
  protected wasViewInitialized = false;
  public viewShow = true;

  private tmplKey = 'dynamic-component';
  private tmpl = '<h1>Loading...</h1>';
  private styles: string[] = [];
  private imports: any = [];
  private tmplType: TemplateType = TemplateType.Email;
  private _individuationKey: string;

  /** IN CASE WE WANT TO RE/Gerante - we need cean up */
  ngOnInit(): void {
  }

  // this is the best moment where to start to process dynamic stuff
  public ngAfterViewInit(): void {
    this.wasViewInitialized = true;
    this.refreshContent();
  }

  // wasViewInitialized is an IMPORTANT switch
  // when this component would have its own changing @Input()
  // - then we have to wait till view is intialized - first OnChange is too soon
  public ngOnChanges(changes: SimpleChanges): void {
    if (this.wasViewInitialized) {
      return;
    }
    this.refreshContent();
  }

  public ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  // wee need Dynamic component builder
  constructor(private el: ElementRef,
              protected typeBuilder: DynamicTypeBuilder,
              protected templateBuilder: DynamicTemplateBuilder) {
  }

  /** Get a Factory and create a component */
  protected refreshContent() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    // here we get a TEMPLATE with dynamic content
    const template = DynamicTemplateBuilder.prepareTemplate(this.tmplKey, this.tmpl, this.tmplType);

    // here we get Factory (just compiled or from cache)
    this.typeBuilder
      .createComponentFactory(template, this.styles, this.imports, this.childInit, this.childViewInit)
      .then((factory: ComponentFactory<IHaveDynamicData>) => {
        // Target will instantiate and inject component (we'll keep reference to it)
        this.componentRef = this.dynamicComponentTarget.createComponent(factory);

        // let's inject @Inputs to component instance
        const component = this.componentRef.instance;

        component.tmpl = this.tmpl;
        // ...
        this.shown.emit(this);
      });
  }

  public setKey(key: string) {
    this.tmplKey = key;
  }

  public getKey() {
    return this.tmplKey;
  }

  public getInnerHtml(bool?: boolean) {
    const temDiv = this.el.nativeElement.querySelector(`#${this.tmplKey}`);
    if (bool) {
      return temDiv.innerHTML;
    } else {
      if (temDiv.firstChild.className === 'bubble bubble-left') {
        return this.el.nativeElement.querySelector('.bubble.bubble-left').innerHTML;
      } else {
        return temDiv.innerHTML;
      }
    }
  }

  public setTmpl(tmpl: string) {
    this.tmpl = tmpl;
    this.refreshContent();
  }

  public getTmpl() {
    return this.tmpl;
  }

  public setTemplateStyles(tmpl: string, styles: string[]) {
    this.styles = styles;
    this.setTmpl(tmpl);
  }

  public setImports(imports: any[]) {
    this.imports = imports;
  }

  // refresh component load the changes
  public refresh() {
    this.setTmpl(this.getInnerHtml(true));
  }

  // reset component discard the changes after last refreshed
  public reset() {
    this.setTmpl(this.getTmpl());
  }

  public show() {
    this.viewShow = true;
  }

  public hide() {
    this.viewShow = false;
  }


  get individuationKey(): string {
    const key = this._individuationKey;
    this._individuationKey = '';
    return key;
  }

  set individuationKey(key: string) {
    this._individuationKey = key;
  }
}



