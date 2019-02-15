import { from } from 'rxjs';
import { AfterViewInit, Component, ElementRef, TemplateRef, OnDestroy, OnInit, Renderer, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/service/auth.service';
import { PlatformDao } from '../../../core/dao/platform.dao';
import { CommonService } from '../../../core/service/common.service';
import { MD5 } from '../../../core/model/md5.model';
import { Utils } from '../../../core/common/utils';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';
import { FrameService } from './frame.service';
import { menus } from '../../../app-routing.module';
import * as _ from 'lodash';
import { SmartGroupDao } from '../../../core/dao/smart-group.dao';
// import { FormModalDemoComponent } from '../../../demo/form-modal-demo/form-modal-demo.component';
@Component({
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit, OnDestroy {
  isUser = true;
  sub: any;
  queryParamsName: string;
  queryParamsNameShow = false;
  userName: string;
  remainAmount: string;
  lastLoginTime: string;
  headerShow = false;
  nameLink: string;
  pathName = location.pathname;
  showTop: boolean;
  @ViewChild('minHeight') _minHeight: ElementRef;
  isCollapsed = false;
  triggerTemplate = null;
  height: number;
  logoUlr: string;
  showBreadCrumb: boolean;
  menus: any;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;
  constructor(private authService: AuthService, private router: Router,
    private platformDao: PlatformDao, private renderer: Renderer,
    private _activatedRoute: ActivatedRoute,
    public _FrameService: FrameService,
    ) {
  }

  ngOnInit() {
    this.sub = this._activatedRoute.queryParams.subscribe((queryParams) => {
      if (queryParams['name']) {
        this.queryParamsNameShow = true;
        this.headerShow = true;
        this.queryParamsName = queryParams['name'];
        this.nameLink = location.pathname;
      } else {
        this.queryParamsNameShow = false;
        this.headerShow = false;
      }
    });
    this.platformDao.userAction.get(CommonService.getSid(), result => {
      const data = result['data'];
      if (data) {
        this.userName = data.userName;
        this.authService.setName(data.userName);
        this.remainAmount = Utils.parseMoney(data.remainAmount);
        this.lastLoginTime = data.lastLoginTime;
      }
    });
    if (this.pathName === '/index' || this.pathName === '/frame') {
      this.showBreadCrumb = false;
    } else {
      this.showBreadCrumb = true;
    }
    this.height = document.body.clientHeight - 64;
    this.menus = menus;
    this.authService.useName.subscribe(data => {
      if (data === 'test') {
        this.processingData(this.menus);
      }
    });

  }
  /**
   * 处理侧边导航栏数据
   * @param obj 对象数据或者数组数据
  **/
  processingData (obj: any) {
    const that = this;
    _.forEach(obj, function(value: any , key: any) {
      if (value.name === 'mailSettings') {
        value.isShow = false;
      }
      if (value.navs instanceof Array) {
        that.processingData(value.navs);
      }
    });
  }
  toggleUser() {
    this.isUser = !this.isUser;
  }
  logout() {
    const that = this;
    that.authService.logout(() => {
      that.router.navigate(['/login']).catch(err => console.log(err));
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  changePassword(user: any, modal) {
    user.userPassword = MD5.md5(user.userPassword);
    user.rePassword = MD5.md5(user.rePassword);
    this.platformDao.userAction.changePassword(CommonService.generateFormData(user), result => {
      if (result.checkSuccess()) {
        modal.hide();
        modal.resetAll();
      }
    });
  }
  backTop() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
  changePwd() {
    // this.changePwdModal.resetAll();
    // this.changePwdModal.show();
  }
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
}
