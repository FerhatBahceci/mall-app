import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store, StoreType} from '../store';
import {StoreService} from '../store.service';

@Component({
  selector: 'app-store-category-detail',
  templateUrl: './store-category-detail.component.html',
  styleUrls: ['./store-category-detail.component.css']
})
export class StoreCategoryDetailComponent implements OnInit {

  stores: Store [];

  constructor(private storeService: StoreService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.stores = this.storeService.getGroupedByStoreType().get(this.route.snapshot.paramMap.get('storeType') as StoreType);
  }
}
