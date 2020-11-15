import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StoreCategoryListComponent} from './store-category-list/store-category-list.component';
import {StoreCategoryDetailComponent} from './store-category-detail/store-category-detail.component';
import {StoreDetailComponent} from './store-detail/store-detail.component';

const routes: Routes = [
  {path: 'store/:name', component: StoreDetailComponent},
  {path: 'stores/:storeType', component: StoreCategoryDetailComponent},
  {path: 'stores', component: StoreCategoryListComponent, data: {animation: 'stores'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoresRoutingModule {
}
