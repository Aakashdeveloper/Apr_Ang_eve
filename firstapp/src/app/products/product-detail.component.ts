import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    id: number;
    details: IProduct[];

    constructor(private route: ActivatedRoute,
                private productService: ProductService,
                private router: Router) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        this.productService.getProductDetails(this.id)
            .subscribe((res) => this.details = res);
    }

    onBack() {
        this.router.navigate(['/products']);
    }
}


/*
 name: string;
    description: string;
    imageUrl: string;
this.route.queryParams
            .subscribe((data) => {
                this.name = data['name'];
                this.description = data['desc'];
                this.imageUrl = data['imgUrl']
            });
*/
