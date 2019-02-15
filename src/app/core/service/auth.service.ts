import {CommonService} from './common.service';
import {Injectable} from '@angular/core';
import {ServiceList} from '../common/service-list';
import {AuthFunc} from '../model/common-result.model';
import {MD5} from '../model/md5.model';
import {Subject} from 'rxjs/Subject';
/**
 * Created by fight on 2017/2/8.
 * 认证授权服务
 */
@Injectable()
export class AuthService {
  private userName = new Subject<string>();
  useName = this.userName.asObservable();

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  _canvas: any;
  ctx: any;
  warea = {x: null, y: null, max: 20000};
  dots = [];
  // 距离比
  ratio: any;

  get isLoggedIn(): Promise<boolean> {
    const fd = new FormData();
    return this.cs.postJson(this.checkSidUrl, fd).then(
      msg => {
        return msg.code === '1';
      }
    );
  }

  get checkSidUrl() {
    return ServiceList.PLATFORM + '/User/CheckSid';
  }

  get loginAction() {
    return ServiceList.PLATFORM + '/User/Login';
  }

  get logoutAction() {
    return ServiceList.PLATFORM + '/User/Logout';
  }

  constructor(private cs: CommonService) {

  }

  login(form: {userName: string, password: string, rememberMe: boolean}, authFunc: AuthFunc) {
    const fd = new FormData();
    const that = this;
    fd.append('un', form.userName);
    fd.append('pwd', MD5.md5(form.password));
    fd.append('rememberMe', form.rememberMe ? 'true' : 'false');
    that.cs.postJsonData(this.loginAction, fd).then(
      sid => {
        CommonService.setSid(sid, form.rememberMe);
        if (sid) {
          authFunc(sid);
          that.cs.refreshServices();
        }
      }
    );
  }

  logout(authFunc: AuthFunc) {
    const fd = new FormData();
    const that = this;
    fd.append('sid', CommonService.getSid());
    that.cs.postJson(this.logoutAction, fd).then(
      sid => {
        CommonService.clearSid();
        authFunc(sid);
      }
    );
  }

  setName(name: string) {
    this.userName.next(name);
  }


}
