import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {MallMapsComponent} from './maps/mall-maps.component';
import {AgmCoreModule} from '@agm/core';
import {StoresModule} from './stores/stores-module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAeyFonkHPC5TRk93Ze-HLVv1Y1N-Uok_w'
            /* apiKey is required, unless you are a
            premium customer, in which case you can
            use clientId
            */
        }),
        StoresModule
    ],
    declarations: [
        AppComponent,
        MallMapsComponent
    ],
    bootstrap: [AppComponent],
})
export class AppModule {

}
