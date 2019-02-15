import {
  Component, ComponentFactory, NgModule, Input, Injectable, CompilerFactory, OnInit, AfterViewInit,
  EventEmitter
} from '@angular/core';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

export interface IHaveDynamicData {
  tmpl: any;
}

@Injectable()
export class DynamicTypeBuilder {

  private _compiler;

  // this object is singleton - so we can use this as a cache
  private _cacheOfFactories: { [templateKey: string]: ComponentFactory<IHaveDynamicData> } = {};


  protected static createNewComponent(tmpl: string, styles: string[], init: EventEmitter<any>, viewInit: EventEmitter<any>) {
    @Component({
      selector: 'dynamic-component',
      template: tmpl,
      styles: styles
    })
    class CustomDynamicComponent implements IHaveDynamicData, OnInit, AfterViewInit {

      @Input() public tmpl: any;

      ngOnInit(): void {
        if (init) {
          init.emit(this);
        }
      }

      ngAfterViewInit(): void {
        if (viewInit) {
          viewInit.emit(this);
        }
      }
    }
    // a component for this particular template
    return CustomDynamicComponent;
  }

  protected static createComponentModule(componentType: any, imports: any[]) {
    @NgModule({
      imports: [
        imports
      ],
      declarations: [
        componentType,
      ],
    })
    class RuntimeComponentModule {
    }
    // a module for just this Type
    return RuntimeComponentModule;
  }


  constructor() {
    const compilerFactory: CompilerFactory =
      platformBrowserDynamic().injector.get(CompilerFactory);
    this._compiler = compilerFactory.createCompiler([]);
  }


  public createComponentFactory(template: string,
                                styles: string[],
                                imports: any[],
                                init: EventEmitter<any>,
                                viewInit: EventEmitter<any>): Promise<ComponentFactory<IHaveDynamicData>> {

    let factory = this._cacheOfFactories[template];

    if (factory) {

      return new Promise((resolve) => {
        resolve(factory);
      });
    }

    // unknown template ... let's create a Type for it
    const type = DynamicTypeBuilder.createNewComponent(template, styles, init, viewInit);
    const module = DynamicTypeBuilder.createComponentModule(type, imports);

    return new Promise((resolve) => {
      this._compiler
        .compileModuleAndAllComponentsAsync(module)
        .then((moduleWithFactories) => {
          const _ = window['_'];
          factory = _.find(moduleWithFactories.componentFactories, {componentType: type});

          this._cacheOfFactories[template] = factory;

          resolve(factory);
        });
    });
  }


}
