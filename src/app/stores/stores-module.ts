import { NgModule } from '@angular/core';
import { StoresRoutingModule } from './stores-routing.module';
import {StoreCategoryListComponent} from './store-category-list/store-category-list.component';
import {CommonModule, TitleCasePipe} from '@angular/common';
import { StoreCategoryDetailComponent} from './store-category-detail/store-category-detail.component';
import {StoreDetailComponent} from './store-detail/store-detail.component';

@NgModule({
  imports: [
    StoresRoutingModule,
    CommonModule
  ],
  declarations: [
    StoreCategoryListComponent,
    StoreCategoryDetailComponent,
    StoreDetailComponent
  ],
  providers: [
    TitleCasePipe
  ],
})
export class StoresModule { }
