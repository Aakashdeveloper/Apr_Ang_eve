import { Component } from '@angular/core';
import { CustomerModal } from '../models/customer-model';

@Component({
    selector: 'app-cust',
    templateUrl: './customer-form.component.html'
})

export class CustomerFormComponent {
    languages: any[] = ['Angular', 'React', 'Node', 'python'];
    mymodel = new CustomerModal('John', 'Eva', 'a@a.com', '12345', true, 'male', 'Angular');
}
