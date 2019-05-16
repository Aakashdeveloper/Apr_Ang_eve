import {Injectable} from '@angular/core';
import { Register } from './register.model';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class FormRegisterService {
    private url = 'http://localhost:5000/api/auth/register';

    constructor(private http: HttpClient) {}
    postUser(register: Register) {
        console.log('getting in service>>>', register);
        return this.http.post(this.url, register);
    }
}

