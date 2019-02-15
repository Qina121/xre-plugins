import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuRoute } from './core/model/menuroute.model';
import { AuthGuard } from '../app/component/structure/login/auth-guard.service';
import { FrameService } from './component/structure/frame/frame.service';
import { LoginComponent } from '../app/component/structure/login/login.component';
import { FormModalDemoComponent } from './demo/form-modal-demo/form-modal-demo.component';
import { SearchModalDemoComponent } from './demo/search-modal-demo/search-modal-demo.component';
import { SearchComponent } from './plugins/search/search.component';

export const menus: MenuRoute[] = [
  {
    icon: 'Menu-iconfont icon-navicon-rqfz', title: '会员管理', name: 'groupMembers', url: '', isShow: true, navs: [
      {name: 'smartGroups', url: '/smart-groups', title: '智能分组', isShow: true },
      {name: 'memberList', url: '/member-list', title: '会员列表', isShow: true }
    ]
  },
  {
    name: 'workflow', icon: 'Menu-iconfont icon-yingxiaogongzuoliu', title: '工作流', url: '', isShow: true, navs: [
      {name: 'workflowHome', url: '/workflow', title: '工作流首页', isShow: true },
    ]
  },
  {
    name: '', icon: 'Menu-iconfont icon-ziliaoneirongguanli_huaban', title: '媒体中心', url: '/central-overview', isShow: true, navs: [
      { name: 'messageList', url: '/message-list', title: '短信', isShow: true},
      { name: 'mailList', url: '/mail-list', title: '邮件', isShow: true},
    ]
  },
  {
    name: 'taskCenter', icon: 'Menu-iconfont icon-renwu', title: '任务中心', url: '', isShow: true, navs: [
      { name: 'mailTask', url: '/mail-task', title: '邮件任务', isShow: true },
      { name: 'smsTask', url: '/sms-task', title: '短信任务', isShow: true },
    ]
  },
  {
    icon: 'Menu-iconfont icon-baobiaoguanli', title: '报表管理', url: '', isShow: true, navs: [
      { name: 'smsReport', url: '/sms-report', title: '短信报表', isShow: true },
      { name: 'emailReport', url: '/email-report', title: '邮件报表', isShow: true }
    ]
  },
  {
    name: 'intelligentChart', icon: 'Menu-iconfont icon-baobiaoguanli1', title: '智能报表', url: '', isShow: true, navs: [
      { name: 'intelligentChartHome', url: '/intelligent-chart', title: '智能报表首页', isShow: true }
    ]
  },
  {
    name: 'systemManagement', icon: 'fa fa-cogs', title: '系统管理', url: '', isShow: true, navs: [
      { name: 'rechargeRecord', url: '/settings/rechargeHistory', title: '充值记录', isShow: true },
      { name: 'recordsConsumption', url: '/settings/chargeLog', title: '消费记录', isShow: true },
      { name: 'systemLog', url: '/settings/beegoLog', title: '系统日志', isShow: true },
      { name: 'memberIntroduction', url: '/import-tasks', title: '会员导入', isShow: true },
      { name: 'mailSettings', url: '/settings/emlSetting', title: '邮件设置', isShow: true }
    ]
  }
];

export const appRoutes: MenuRoute[] = [
  { path: '', redirectTo: '/frame', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'form_modal_demo', component: FormModalDemoComponent },
  { path: 'search_modal_demo', component: SearchModalDemoComponent },
  // { path: 'search_modal_demo', component: SearchComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard, FrameService]
})
export class AppRoutingModule { }
