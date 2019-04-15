import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { ProductComponent } from './products/product.component';

@NgModule({
    // all module you will declare here
    imports: [
        BrowserModule
    ],

    //  all omponents and pipe
    declarations: [
        AppComponent,
        BookComponent,
        ProductComponent
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
