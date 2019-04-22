import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { ProductComponent } from './products/product.component';
import {MyUpperCasePipe} from './products/myUpper.pipe';
import { MyLowerCasePipe } from './products/myLowerCase.pipe';
import { MyCasePipe } from './products/myCasePipe.pipe';
import { MyDiscountPipe } from './products/discount.pipe';

@NgModule({
    // all module you will declare here
    imports: [
        BrowserModule,
        FormsModule
    ],

    //  all components and pipe
    declarations: [
        AppComponent,
        BookComponent,
        ProductComponent,
        MyUpperCasePipe,
        MyLowerCasePipe,
        MyCasePipe,
        MyDiscountPipe
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
