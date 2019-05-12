import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ProductComponent } from './products/product.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './shared/notFound.component';
import { RouterGaurds } from './products/Router.gaurds';

const routes: Routes = [
    {path: 'products', component: ProductComponent},
    {path: 'products/:id', canActivate: [RouterGaurds], component: ProductDetailComponent},
    {path: 'orders', component: OrdersComponent},
    {path: 'home', component: HomeComponent},
    {path: 'movies', component: MoviesComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent},
];


@NgModule({
 imports: [ RouterModule.forRoot(routes)],
 providers: [RouterGaurds],
 exports: [RouterModule]
})

export class AppRoutingModule {

}
