import { Subject } from 'rxjs/Subject';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class FrameService implements OnInit {
  crumbNavigations = [];
  showMask = false;
  ismenuMask = false;
  constructor() {
  }
  ngOnInit() {
    const that = this;
  }
  setCrumbNavigation (termList, linkList) {
    this.crumbNavigations.splice(0, this.crumbNavigations.length);
    for (let i = 0; i < termList.length; i++) {
      this.crumbNavigations.push({term: termList[i], link: linkList[i]});
    }
    sessionStorage.setItem('name', JSON.stringify(this.crumbNavigations));
  }
}
