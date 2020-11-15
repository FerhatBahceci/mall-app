import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MallMapsComponent} from './maps/mall-maps.component';

const routes: Routes = [
  { path: 'maps', component: MallMapsComponent},
/*  { path: 'stores', component: MallMapsComponent},
  { path: 'parking', component: MallMapsComponent},*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
