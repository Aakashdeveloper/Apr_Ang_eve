import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { NotFoundComponent } from './shared/notFound.component';
import { ProductModule } from './products/product.module';
import { MoviesModule } from './movies/movies.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    // all module you will declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ProductModule,
        MoviesModule,
        AppRoutingModule
    ],

    //  all components and pipe
    declarations: [
        AppComponent,
        HomeComponent,
        OrdersComponent,
        NotFoundComponent
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
