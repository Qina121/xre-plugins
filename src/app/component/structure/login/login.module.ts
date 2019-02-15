/**
 * Created by 17710 on 2016/12/15.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login-routing.module';
import {AuthGuard} from './auth-guard.service';
import {AuthService} from '../../../core/service/auth.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class LoginModule {
}
