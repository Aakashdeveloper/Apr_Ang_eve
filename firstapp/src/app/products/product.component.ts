import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product.component.html',
    // styles: ['thead{color:red}', 'h4{color:teal}'],
    styleUrls: ['./product.component.css'],
    styles: [
        `.online{
           background-color:wheat
        }`
    ]
})

export class ProductComponent implements OnInit {
    title: String =  '****Product Listing****';
    showTable: Boolean = false;
    showImage: Boolean = false;
    userInput: string ;
    imageSize: number = 100;
    serverStatus: String = 'offline';

    constructor(private productService: ProductService) {
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }
    products: IProduct[];


    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    getColor() {
        return this.serverStatus === 'Online' ? 'green' : 'red';
    }

    onDataRecive(message: string): void {
        this.title = '****Product Listing**** ' + message;
    }

    ngOnInit( ): void {
        // this.products = this.productService.getProducts();
        this.productService.getProducts()
            .subscribe((data) => this.products = data);
    }
}
