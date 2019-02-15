/**
 * Created by 17710 on 2016/12/15.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login.component';

const loginRoutes: Routes = [
  {path: 'login', component: LoginComponent},
];
@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule {
}
