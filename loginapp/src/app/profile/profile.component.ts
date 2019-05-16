import { Component, OnInit } from '@angular/core';
import { FormLoginService } from '../login-form/login.service';

@Component({
    selector: 'app-cust',
    templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {

    userinfo;
    token: string;

    constructor(private formloginService: FormLoginService) {}

    ngOnInit() {
        this.token = localStorage.getItem('TOKEN_NUMBER');
        this.formloginService.getUserRole(this.token)
            .subscribe((res) => this.userinfo = res);
    }
}
