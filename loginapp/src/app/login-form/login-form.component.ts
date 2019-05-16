import { Component } from '@angular/core';
import { Login } from './login.model';
import { NgForm } from '@angular/forms';
import { FormLoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cust',
    templateUrl: './login-form.component.html'
})

export class LoginFormComponent {
    constructor(private formLoginService: FormLoginService,
                private router: Router) {}

    loginmodel = new Login('a@gmail.com', '12345678');

    submitLogin(form: NgForm): void {
        // console.log(form.value);
        this.formLoginService.postLogin(form.value)
            .subscribe((res) => this.formLoginService.getUserRole(res['token'])
            .subscribe((response) => this.validateUser(response['role'])) );
    }

    validateUser(typeofUser): void {
        // console.log('validate resposne>>>', typeofUser);
        localStorage.setItem('ROLE_TYPE', typeofUser);
        this.router.navigate(['/profile']);
    }
}
