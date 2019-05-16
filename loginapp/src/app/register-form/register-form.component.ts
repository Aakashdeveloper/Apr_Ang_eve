import { Component } from '@angular/core';
import { Register } from './register.model';
import { NgForm } from '@angular/forms';
import { FormRegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cust',
    templateUrl: './register-form.component.html'
})

export class RegisterFormComponent {
    constructor(private formRegisterService: FormRegisterService,
                private router: Router) {}
    registermodel = new Register('john', 'a@a.com', '12345678');



    submitRegister(form: NgForm): void {
        this.formRegisterService.postUser(form.value)
            .subscribe((res) => this.router.navigate(['/login']));
    }
}
