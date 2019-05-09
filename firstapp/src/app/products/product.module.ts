import { NgModule } from '@angular/core';
import { ProductService } from './product.service';
import { ProductComponent } from './product.component';
import { MyUpperCasePipe } from './myUpper.pipe';
import { MyLowerCasePipe } from './myLowerCase.pipe';
import { MyCasePipe } from './myCasePipe.pipe';
import { MyDiscountPipe } from './discount.pipe';
import { ProductSearchPipe } from './product-search.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    declarations: [
        ProductComponent,
        MyUpperCasePipe,
        MyLowerCasePipe,
        MyCasePipe,
        MyDiscountPipe,
        ProductSearchPipe,
        ProductDetailComponent
    ],
    providers: [
        ProductService
    ]
})

export class ProductModule {

}
