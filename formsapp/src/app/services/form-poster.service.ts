import {Injectable} from '@angular/core';
import { CustomerModal } from '../models/customer-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class FormPosterService {
    private url = 'http://localhost:3100/postEmployee';

    constructor(private http: HttpClient) {}
    postCustomer( customer: CustomerModal) {
        console.log('getting in service>>>', customer);
        return this.http.post(this.url, customer);
    }
}

