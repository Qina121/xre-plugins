import { isArray } from 'util';
import { Injectable, OnInit } from '@angular/core';
import { TreeviewItem } from './lib';

export class SelectTreeService {
    name: string;
    dropdownList = [];
    optionMap: any;
    getList(): TreeviewItem[] {
        const that = this;
        const options = [];
        that.optionMap = new Map();
        for (let i = 0; i < that.dropdownList.length; i++) {
            that.dropdownList[i].collapsed = true;
            // if (isArray(that.dropdownList[i].children)) {
            //     for (let j = 0; j < that.dropdownList[i].children.length; j++) {
            //         that.dropdownList[i].children[j].checked = false;
            //     }
            // }
            that.optionMap.set(that.setName(i), new TreeviewItem(that.dropdownList[i]));
            options.push(that.optionMap.get(that.setName(i)));
        }

        // const childrenCategory = new TreeviewItem({
        //     text: 'Children', id: 1, collapsed: true, children: [
        //         { text: 'Baby 3-5', id: 11 },
        //         { text: 'Baby 6-8', id: 12 },
        //         { text: 'Baby 9-12', id: 13 }
        //     ]
        // });
        // const itCategory = new TreeviewItem({
        //     text: 'IT', id: 9, children: [
        //         {
        //             text: 'Programming', id: 91, children: [{
        //                 text: 'Frontend', id: 911, children: [
        //                     { text: 'Angular1', id: 9111 },
        //                     { text: 'Angular 2', id: 9112 },
        //                     { text: 'ReactJS', id: 9113, disabled: true }
        //                 ]
        //             }, {
        //                 text: 'Backend', id: 912, children: [
        //                     { text: 'C#', id: 9121 },
        //                     { text: 'Java', id: 9122 },
        //                     { text: 'Python', id: 9123, checked: false, disabled: true }
        //                 ]
        //             }]
        //         },
        //         {
        //             text: 'Networking', id: 92, children: [
        //                 { text: 'Internet', id: 921 },
        //                 { text: 'Security', id: 922 }
        //             ]
        //         }
        //     ]
        // });
        // const teenCategory = new TreeviewItem({
        //     text: 'Teen', id: 2, collapsed: true, disabled: true, children: [
        //         { text: 'Adventure', id: 21 },
        //         { text: 'Science', id: 22 }
        //     ]
        // });
        // const othersCategory = new TreeviewItem({ text: 'Others', id: 3, checked: false, disabled: true });
        // return [childrenCategory, itCategory, teenCategory, othersCategory];
        return options;
    }

    setData() {
        // const childrenCategory = new TreeviewItem({
        //     text: 'Children', id: 1, collapsed: true, children: [
        //         { text: 'Baby 3-5', id: 11 },
        //         { text: 'Baby 6-8', id: 12 },
        //         { text: 'Baby 9-12', id: 13 }
        //     ]
        // });
        // return [childrenCategory];
        // console.log(this.getList());
        // this.items = this.getList();
        // return this.items;

    }

    setName(index) {
        return 'option' + index;
    }
}
