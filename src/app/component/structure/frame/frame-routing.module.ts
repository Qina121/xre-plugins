/**
 * Created by 17710 on 2016/12/15.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from '../home-page/home-page.component';
import {FrameComponent} from './frame.component';
import {AuthGuard} from '../login/auth-guard.service';

const frameRoutes: Routes = [
  {
    path: '', redirectTo: '/frame', pathMatch: 'full'
  },
  {
    path: '',
    component: FrameComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'index', component: HomePageComponent},
    ]
  },
  {
    path: 'frame',
    component: FrameComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: HomePageComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(frameRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FrameRoutingModule {
}
