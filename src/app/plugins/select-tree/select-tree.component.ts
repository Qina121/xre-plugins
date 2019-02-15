import { TreeItem } from './lib/treeview-item';
import { Component, OnInit, Input, EventEmitter, Output, ViewChild, TemplateRef } from '@angular/core';
import { TreeviewItem, TreeviewConfig } from './lib';
import { SelectTreeService } from './select-tree.service';
// import { TreeviewComponent } from './lib/treeview.component';

@Component({
  selector: 'xma-select-tree',
  templateUrl: './select-tree.component.html',
  styleUrls: ['./select-tree.component.css'],
  providers: [
    SelectTreeService
  ]
})
export class SelectTreeComponent implements OnInit {
  // @ViewChild(TreeviewComponent) treeviewComponent: TreeviewComponent;
  optionMap: any;
  dropdownList = [];
  TreeItem = [];
  // @Input() items: any;
  @Input() public id = '';
  @Input() public name = '';
  @Output() public change: EventEmitter<any> = new EventEmitter();
  @Output() selectedChange = new EventEmitter<any[]>(true);

  @Input()
   public get items(): any {
     return this.items;
   }
   public set items(value: any) {
    if (value) {
      this.TreeItem = this.settingData(value);
    }
  }

  dropdownEnabled = true;
  values: number[];
  config = TreeviewConfig.create({
    hasAllCheckBox: true,
    hasFilter: true,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 400,
  });
  buttonClass = 'btn btn-primary';
  constructor(
    private service: SelectTreeService
  ) { }

  ngOnInit() {
  }
  onSelectedChange(e) {
    this.selectedChange.emit(e);
    // this.selectedChange.emit(this.treeviewComponent.filterItems);
  }

  settingData(data): TreeviewItem[] {
    const that = this;
    const options = [];
    that.optionMap = new Map();
    for (let i = 0; i < data.length; i++) {
      data[i].collapsed = true;
      data[i].checked = false;
      if (data[i].children !== null) {
        that.ergodicObject(data[i]);
      }
      that.optionMap.set(that.setName(i), new TreeviewItem(data[i]));
      options.push(that.optionMap.get(that.setName(i)));
    }
    return options;
  }
  ergodicObject (obj) {
    const that = this;
    let childrenIndex;
    for (childrenIndex in obj.children) {
      if ( obj.children[childrenIndex] !== null) {
        obj.children[childrenIndex].checked = false;
        that.ergodicObject(obj.children[childrenIndex]);
      }
    }
  }
  setName(index) {
    return 'option' + index;
  }

}
