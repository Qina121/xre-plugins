import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
    activeIndex: boolean;
    isNavbarShow: boolean;
    navbarShow: boolean;
    showNav: boolean;
    showIcon: boolean;
  constructor() {
    if (window.innerWidth > 768) {
        this.navbarShow = true;
        this.isNavbarShow = false;
        this.showNav = true;
        this.showIcon = false;
      } else {
        this.navbarShow = false;
        this.isNavbarShow = false;
        this.showNav = false;
        this.showIcon = true;
      }
  }
    getIsNavbarShow() {
        return this.isNavbarShow;
    }
    getNavbarShow() {
        return this.navbarShow;
    }
    setNavbarShow () {
        this.navbarShow = !this.navbarShow;
    }
    setIsNavbarShow () {
        this.isNavbarShow = !this.isNavbarShow;
    }
    setShowNav () {
        this.showNav = !this.showNav;
    }
    setShowIcon () {
        this.showIcon = !this.showIcon;
    }
    getActiveIndex () {
      return this.activeIndex;
    }
    setActiveIndex () {
      return this.activeIndex = false;
    }
}
