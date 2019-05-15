import {Injectable} from '@angular/core';
import { Register } from './register.model';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class FormRegisterService {
    private url = 'http://localhost:3100/postEmployee';

    constructor(private http: HttpClient) {}
    postCustomer( register: Register) {
        console.log('getting in service>>>', register);
        return this.http.post(this.url, register);
    }
}

