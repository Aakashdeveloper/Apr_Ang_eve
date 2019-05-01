import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { ProductComponent } from './products/product.component';
import {MyUpperCasePipe} from './products/myUpper.pipe';
import { MyLowerCasePipe } from './products/myLowerCase.pipe';
import { MyCasePipe } from './products/myCasePipe.pipe';
import { MyDiscountPipe } from './products/discount.pipe';
import { ProductSearchPipe } from './products/product-search.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';

@NgModule({
    // all module you will declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],

    //  all components and pipe
    declarations: [
        AppComponent,
        BookComponent,
        ProductComponent,
        MyUpperCasePipe,
        MyLowerCasePipe,
        MyCasePipe,
        MyDiscountPipe,
        ProductSearchPipe,
        StarComponent
    ],

    // only first component
    bootstrap: [
        AppComponent
    ],

    // all services  declare here
    providers: [
        ProductService
    ]
})



export class AppModule {

}
