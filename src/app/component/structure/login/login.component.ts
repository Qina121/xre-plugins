import {Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';
import {AuthService} from '../../../core/service/auth.service';
import {CommonService} from '../../../core/service/common.service';
// import * as html2canvas from 'html2canvas';
declare const txtCn: any;
import canvasP from '../../../../../src/assets/js/plugins/loginCanvas/canvas.js';
import { MessageService } from '../../../core/service/message.service';
import {Location} from '@angular/common';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  title = txtCn.login.title;
  loginName = txtCn.login.login;
  useName = txtCn.login.useName;
  pwd = txtCn.login.pwd;
  forgetPwd = txtCn.login.forgetPwd;
  loginTime = txtCn.login.loginTime;

   // 获得canvas
  //  @ViewChild('canvas') _canvas: ElementRef ;
  _canvas: any;
  ctx: any;
  warea = {x: null, y: null};
  cWidth: any;
  cHeight: any;
  cWV: any;
  cHV: any;


  constructor(public authService: AuthService, public router: Router, public fb: FormBuilder, public Location: Location) {
    this.loginForm = fb.group({
      userName: '',
      password: '',
      rememberMe: ''
    });

  }

  canfun(_canvas, ctx, width, height) {
    return canvasP(_canvas, ctx, width, height);
  }

  ngOnInit(): void {
    // console.log(this.Location.path());

    // this._canvas = document.getElementById('cas') as HTMLCanvasElement;
    // this.ctx = this._canvas.getContext('2d');
    // this.ctx.fillStyle = '#0000ff';

    // this.cWidth = document.documentElement.clientWidth;
    // this.cHeight = document.documentElement.clientHeight;

    // this.canfun(this._canvas, this.ctx, this.cWidth, this.cHeight);

    if (CommonService.getSid()) {
      this.redirect();
    }
  }


  login() {
    const that = this;
    const formData = this.loginForm.value;
    if (formData.userName) {
      this.authService.login(formData, function (sid) {
        that.redirect();
      });
    } else {
      MessageService.error('请输入用户名');
    }
  }


  redirect() {
    const that = this;
    // Get the redirect URL from our auth service
    // If no redirect has been set, use the default
    const redirect = that.authService.redirectUrl ? that.authService.redirectUrl : '/frame';
    // Redirect the user
    that.router.navigate([redirect]);
  }


  onResize() {
    this.cWidth = document.documentElement.clientWidth;
    this.cHeight = document.documentElement.clientHeight;
  }

   come(e) {
    e = e || window.event;
    this.warea.x = e.clientX;
    this.warea.y = e.clientY;
  }

  out(e) {
    this.warea.x = null;
    this.warea.y = null;
  }

}
