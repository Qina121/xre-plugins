/**
 * Created by 17710 on 2016/12/15.
 */
import {Injectable} from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import {AuthService} from '../../../core/service/auth.service';
import {CommonService} from '../../../core/service/common.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): Promise<boolean> {
    return this.authService.isLoggedIn.then(bool => {
      this.authService.redirectUrl = url;
      if (bool) {
        return true;
      } else {
        this.router.navigate(['/login']).catch(err => console.error(err));
        CommonService.clearSid();
        return false;
      }
    }, err => {
      console.log(err);
      this.router.navigate(['/login']).catch(err1 => console.error(err1));
      return false;
    });
  }
}
