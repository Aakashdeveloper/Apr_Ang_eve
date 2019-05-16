import { Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Injectable()

export class LoginGaurdService implements CanActivate {
    token: string;
    constructor(private router: Router) {}

    canActivate(router: ActivatedRouteSnapshot): boolean {
        this.token = localStorage.getItem('TOKEN_NUMBER');
        if (this.token == null) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}


