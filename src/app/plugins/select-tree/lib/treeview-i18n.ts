import { Injectable } from '@angular/core';
import { TreeviewItem, TreeviewSelection } from './treeview-item';

@Injectable()
export abstract class TreeviewI18n {
    abstract getText(selection: TreeviewSelection): string;
    abstract getAllCheckboxText(): string;
    abstract getFilterPlaceholder(): string;
    abstract getFilterNoItemsFoundText(): string;
    abstract getTooltipCollapseExpandText(isCollapse: boolean): string;
    // abstract getAllTex(): any;
}

@Injectable()
export class TreeviewI18nDefault extends TreeviewI18n {
    getText(selection: TreeviewSelection): string {
        if (selection.uncheckedItems.length === 0) {
            return this.getAllCheckboxText();
        }

        switch (selection.checkedItems.length) {
            case 0:
                return '下拉选择';
            case 1:
                return selection.checkedItems[0].text;
            default:
                return `${selection.checkedItems.length} 项已选择`;
        }
    }
    // getAllTex(selection): string {
    //     return selection;
    // }

    getAllCheckboxText(): string {
        return 'All';
    }

    getFilterPlaceholder(): string {
        return 'Filter';
    }

    getFilterNoItemsFoundText(): string {
        return 'No items found';
    }

    getTooltipCollapseExpandText(isCollapse: boolean): string {
        return isCollapse ? 'Expand' : 'Collapse';
    }
}
