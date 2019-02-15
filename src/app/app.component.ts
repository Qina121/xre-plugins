import { Component, OnInit } from '@angular/core';
import {CommonService} from './core/service/common.service';
@Component({
  selector: 'xma-root',
  template: `<router-outlet></router-outlet><xma-loading></xma-loading>`,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    CommonService.clearPageCache();
  }

}
