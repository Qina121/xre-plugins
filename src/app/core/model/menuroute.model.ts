import { UrlMatcher, Data, ResolveData, LoadChildren, RunGuardsAndResolvers, Route, Routes } from '@angular/router';
import { Type } from '@angular/core';


export class MenuRoute implements Route {

    path?: string;
    pathMatch?: string;
    matcher?: UrlMatcher;
    component?: Type<any>;
    redirectTo?: string;
    outlet?: string;
    canActivate?: any[];
    canActivateChild?: any[];
    canDeactivate?: any[];
    canLoad?: any[];
    data?: Data;
    resolve?: ResolveData;
    children?: MenuRoute[];
    loadChildren?: LoadChildren;
    runGuardsAndResolvers?: RunGuardsAndResolvers;
    isShow?: boolean;

    menus?: MenuRoute[];
    testMenus?: MenuRoute[];
    icon?: string;
    title?: string;
    name?: string;
    navs?: MenuRoute[];
    url?: string;



// tslint:disable-next-line:eofline
}
