import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { LoadingComponent } from './plugins/loading/loading.component';
import { LoginModule } from './component/structure/login/login.module';
import { FrameModule } from './component/structure/frame/frame.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN, en_US } from 'ng-zorro-antd';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import en from '@angular/common/locales/en';
import { DemoModule } from './demo/demo.module';
// import { FormModalModule } from './plugins/form-modal/form-modal.module';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    CoreModule,
    LoginModule,
    FrameModule,
    // FormModalModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    /** 导入 ng-zorro-antd 模块 **/
    // NgZorroAntdModule,
    NgZorroAntdModule.forRoot(),
    DemoModule
  ],
  exports: [],
  bootstrap: [AppComponent],
  providers   : [ { provide: NZ_I18N, useValue: zh_CN } ]
})
export class AppModule { }
