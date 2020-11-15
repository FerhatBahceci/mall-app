import {Component, OnInit} from '@angular/core';
import {Store} from '../store';
import {StoreService} from '../store.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-store-detail',
    templateUrl: './store-detail.component.html',
    styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {

    store: Store;

    constructor(private storeService: StoreService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.storeService.stores$.subscribe(res => {
            this.store = res.find((store) => store.name === this.route.snapshot.paramMap.get('name'));
        });
    }
}
