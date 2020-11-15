import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store, StoreType} from './store';
import {BehaviorSubject, Subscription} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class StoreService {

    static readonly STORE_ENDPOINT = '/stores';

    stores$: BehaviorSubject<Store []> = new BehaviorSubject<Store[]>([]);

    constructor(private httpClient: HttpClient) {
    }

    loadStores(): Subscription {
        return this.httpClient.get<Store []>(environment.apiUrl + StoreService.STORE_ENDPOINT)
            .subscribe(res => {
                res.sort((storeA: Store, storeB: Store) => storeA.name.localeCompare(storeB.name));
                this.stores$ = new BehaviorSubject(res);
            });
    }

    public getGroupedByStoreType(): Map<StoreType, Store []> {
        this.stores$.map()
    }

    private groupByStoreTypes(stores: Store []): Map<StoreType, Store []> {
        return new Map()
            .set(StoreType.ACCESSORIES, this.groupByStoreType(StoreType.ACCESSORIES, stores))
            .set(StoreType.BOOKS_MEDIA_ELECTRONICS, this.groupByStoreType(StoreType.BOOKS_MEDIA_ELECTRONICS, stores))
            .set(StoreType.FASHION, this.groupByStoreType(StoreType.FASHION, stores))
            .set(StoreType.GROCERIES, this.groupByStoreType(StoreType.GROCERIES, stores))
            .set(StoreType.HEALTH_BEAUTY, this.groupByStoreType(StoreType.HEALTH_BEAUTY, stores))
            .set(StoreType.HOME_DECORATION, this.groupByStoreType(StoreType.HOME_DECORATION, stores))
            .set(StoreType.JEWELLERY, this.groupByStoreType(StoreType.JEWELLERY, stores))
            .set(StoreType.LEISURE, this.groupByStoreType(StoreType.LEISURE, stores))
            .set(StoreType.OPTICIAN, this.groupByStoreType(StoreType.OPTICIAN, stores))
            .set(StoreType.RESTAURANT_CAFE, this.groupByStoreType(StoreType.RESTAURANT_CAFE, stores))
            .set(StoreType.SERVICE, this.groupByStoreType(StoreType.SERVICE, stores))
            .set(StoreType.SPORTS, this.groupByStoreType(StoreType.SPORTS, stores))
            .set(StoreType.STAND, this.groupByStoreType(StoreType.STAND, stores))
            .set(StoreType.TOYS_HOBBY, this.groupByStoreType(StoreType.TOYS_HOBBY, stores));
    }

    private groupByStoreType(storeType: StoreType, stores: Store []): Store [] {
        return stores.filter(store => store.storeType === storeType);
    }
}

