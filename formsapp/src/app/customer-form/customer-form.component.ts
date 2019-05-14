import { Component } from '@angular/core';
import { CustomerModal } from '../models/customer-model';
import { NgForm } from '@angular/forms';
import { FormPosterService } from '../services/form-poster.service';

@Component({
    selector: 'app-cust',
    templateUrl: './customer-form.component.html'
})

export class CustomerFormComponent {
    constructor(private formPosterService: FormPosterService) {}
    languages: any[] = ['Angular', 'React', 'Node', 'python'];
    mymodel = new CustomerModal('John', 'Eva', 'a@a.com', '12345', true, 'male', 'Angular');

    hasCodeLangError: boolean = false;
    firstToUpper(value: string): void {
        if (value.length > 0) {
            this.mymodel.firstname = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            this.mymodel.firstname = value;
        }
    }

    validateCodeLang(event): void {
        if (this.mymodel.codelang === 'default') {
            this.hasCodeLangError = true;
        } else {
            this.hasCodeLangError = false;
        }
    }

    submitForm(form: NgForm): void {
        // console.log(form.value);
        this.formPosterService.postCustomer(form.value)
            .subscribe((res) => console.log('data posted'));
    }
}
