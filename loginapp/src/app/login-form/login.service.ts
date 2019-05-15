import {Injectable} from '@angular/core';
import { Login } from './login.model';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class FormLoginService {
    private url = 'http://localhost:3100/postEmployee';

    constructor(private http: HttpClient) {}
    postCustomer( login: Login) {
        console.log('getting in service>>>', login);
        return this.http.post(this.url, login);
    }
}

