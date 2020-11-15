import {Component, OnInit} from '@angular/core';
import {StoreService} from '../store.service';
import {StoreType} from '../store';
import {TitleCasePipe} from '@angular/common';

@Component({
    selector: 'app-store-category',
    templateUrl: './store-category-list.component.html',
    styleUrls: ['./store-category-list.component.css']
})
export class StoreCategoryListComponent implements OnInit {

    constructor(private storeService: StoreService,
                private titleCasePipe: TitleCasePipe) {
    }

    ngOnInit() {
        this.storeService.loadStores();
    }

    storeTypeTitleAndAmount(storeType: string, categorizedStores: Map<StoreType, []>) {
        const amountOfStoresWithStoreType = categorizedStores.get(storeType).length;
        const wordsInStoreType = storeType.replace(/[_-]/g, ' ').split(' ');

        let title;
        switch (wordsInStoreType.length) {
            case 1:
                title = wordsInStoreType[0];
                break;
            case 2:
                title = wordsInStoreType.join(' & ');
                break;
            case 3:
                title = wordsInStoreType.slice(0, 2).join(', ') + ' & ' + wordsInStoreType.slice(2, 3);
        }
        return this.titleCasePipe.transform(title) + ' (' + amountOfStoresWithStoreType + ')';
    }
}
