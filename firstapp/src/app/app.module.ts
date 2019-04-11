import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
    // all module you will declare here
    imports: [
        BrowserModule
    ],

    //  all omponents and pipe
    declarations: [
        AppComponent
    ],

    // only first component
    bootstrap: [
        AppComponent
    ],

    // all services  declare here
    providers: []
})



export class AppModule {

}
