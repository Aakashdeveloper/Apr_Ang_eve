import { Component } from '@angular/core';
import { Login } from './login.model';
import { NgForm } from '@angular/forms';
import { FormLoginService } from './login.service';

@Component({
    selector: 'app-cust',
    templateUrl: './login-form.component.html'
})

export class LoginFormComponent {
    constructor(private formLoginService: FormLoginService) {}

    loginmodel = new Login('a@a.com', '12345');

    submitLogin(form: NgForm): void {
        // console.log(form.value);
        this.formLoginService.postCustomer(form.value)
            .subscribe((res) => console.log('data posted'));
    }
}
