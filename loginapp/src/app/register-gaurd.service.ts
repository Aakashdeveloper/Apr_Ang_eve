import { Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Injectable()

export class RegisterGaurdService implements CanActivate {
    token: string;
    user: string;
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        this.token = localStorage.getItem('TOKEN_NUMBER');
        this.user = localStorage.getItem('ROLE_TYPE');
        if (this.token == null) {
            this.router.navigate(['/login']);
            return false;
        }
        if ( this.token !== null && this.user === 'admin') {
            return true;
        }
    }
}


