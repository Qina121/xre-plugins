import { Injectable } from '@angular/core';
import { TreeviewItem } from '../../lib';

export class ProductService {
    getProducts(): TreeviewItem[] {
        const fruitCategory = new TreeviewItem({
            text: 'Fruit', id: 1, children: [
                { text: 'Apple', id: 11 },
                { text: 'Mango', id: 12 }
            ]
        });
        const vegetableCategory = new TreeviewItem({
            text: 'Vegetable', id: 2, children: [
                { text: 'Salad', id: 21 },
                { text: 'Potato', id: 22 }
            ]
        });
        vegetableCategory.children.push(new TreeviewItem({ text: 'Mushroom', id: 23, checked: false }));
        vegetableCategory.correctChecked(); // need this to make 'Vegetable' node to change checked value from true to false
        return [fruitCategory, vegetableCategory];
    }
}
