import {Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,
     Router } from '@angular/router';


@Injectable()

export class RouterGaurds implements CanActivate {

    constructor(private router: Router) {}
    canActivate(routes: ActivatedRouteSnapshot): boolean {
        const id = +routes.url[1].path;
        if ( isNaN(id) || id < 1 ) {
            alert('Invalid Id');
            this.router.navigate(['/products']);
            return false;
        }
        return true;
    }
}
