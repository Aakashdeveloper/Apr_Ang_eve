import {Injectable} from '@angular/core';
import { Login } from './login.model';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class FormLoginService {
    private url = 'http://localhost:5000/api/auth/login';
    private UserInfo = 'http://localhost:5000/api/auth/userinfo';

    constructor(private http: HttpClient) {}
    postLogin( login: Login) {
        // console.log('getting in service>>>', login);
        return this.http.post(this.url, login);
    }

    getUserRole(token) {
        localStorage.setItem('TOKEN_NUMBER', token);
        return this.http.get(this.UserInfo, {headers: {'x-access-token': token}});
    }
}

