import { Injectable } from '@angular/core';
import { TreeviewItem } from '../../lib';

export class BookService {
    name: string;
    dropdownList = [];
    getBooks(): TreeviewItem[] {
        const childrenCategory = new TreeviewItem({
            text: 'Children', id: 1, collapsed: true, children: [
                { text: 'Baby 3-5', id: 11 },
                { text: 'Baby 6-8', id: 12 },
                { text: 'Baby 9-12', id: 13 }
            ]
        });
        const itCategory = new TreeviewItem({
            text: 'IT', id: 9, children: [
                {
                    text: 'Programming', id: 91, children: [{
                        text: 'Frontend', id: 911, children: [
                            { text: 'Angular1', id: 9111 },
                            { text: 'Angular 2', id: 9112 },
                            { text: 'ReactJS', id: 9113, disabled: true }
                        ]
                    }, {
                        text: 'Backend', id: 912, children: [
                            { text: 'C#', id: 9121 },
                            { text: 'Java', id: 9122 },
                            { text: 'Python', id: 9123, checked: false, disabled: true }
                        ]
                    }]
                },
                {
                    text: 'Networking', id: 92, children: [
                        { text: 'Internet', id: 921 },
                        { text: 'Security', id: 922 }
                    ]
                }
            ]
        });
        const teenCategory = new TreeviewItem({
            text: 'Teen', id: 2, collapsed: true, disabled: true, children: [
                { text: 'Adventure', id: 21 },
                { text: 'Science', id: 22 }
            ]
        });
        const othersCategory = new TreeviewItem({ text: 'Others', id: 3, checked: false, disabled: true });
        return [childrenCategory, itCategory, teenCategory, othersCategory];
    }

    // creationObject () {
    //     const that = this;
    //     that.name = new TreeviewItem({});
    // }
}
