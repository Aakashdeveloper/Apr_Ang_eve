import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-emp',
    templateUrl: './employee.component.html'
})

export class EmployeeComponent implements OnInit {

    employeeForm: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.employeeForm = this.fb.group({
            firstName: ['John', [Validators.required, Validators.minLength(3)]],
            email: ['a@a.com', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z0-9]$')]],
            password: ['', [Validators.required, Validators.maxLength(8)]]
        });
    }


}
