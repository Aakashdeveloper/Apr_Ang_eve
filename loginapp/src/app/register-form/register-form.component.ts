import { Component } from '@angular/core';
import { Register } from './register.model';
import { NgForm } from '@angular/forms';
import { FormRegisterService } from './register.service';

@Component({
    selector: 'app-cust',
    templateUrl: './register-form.component.html'
})

export class RegisterFormComponent {
    constructor(private formRegisterService: FormRegisterService) {}
    registermodel = new Register('john', 'a@a.com', '12345');



    submitRegister(form: NgForm): void {
        // console.log(form.value);
        this.formRegisterService.postCustomer(form.value)
            .subscribe((res) => console.log('data posted'));
    }
}
