// import { Component, OnInit } from '@angular/core';
// import { TreeviewItem, TreeviewConfig } from '../../lib';
// import { BookService } from '../book/book.service';

// @Component({
//     selector: 'xma-text',
//     templateUrl: './text.component.html',
//     providers: [
//         BookService
//     ]
// })
// export class TextComponent implements OnInit {
//     dropdownEnabled = true;
//     items: TreeviewItem[];
//     values: number[];
//     config = TreeviewConfig.create({
//         hasAllCheckBox: true,
//         hasFilter: true,
//         hasCollapseExpand: true,
//         decoupleChildFromParent: false,
//         maxHeight: 400
//     });
//     buttonClass = 'btn btn-primary';
//     constructor(
//         private service: BookService
//     ) { }

//     ngOnInit() {
//         this.items = this.service.getBooks();
//     }
//     onSelectedChange(e) {
//         // console.log(e);
//     }
// }
