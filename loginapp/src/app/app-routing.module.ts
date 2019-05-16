import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginGaurdService } from './login-gaurd.service';
import { RegisterGaurdService } from './register-gaurd.service';

const routes: Routes = [
    {path: 'register', canActivate: [RegisterGaurdService], component: RegisterFormComponent},
    {path: 'profile' , canActivate: [LoginGaurdService] , component: ProfileComponent},
    {path: 'login', component: LoginFormComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'}
];


@NgModule({
 imports: [ RouterModule.forRoot(routes)],
 providers: [LoginGaurdService, RegisterGaurdService],
 exports: [RouterModule]
})

export class AppRoutingModule {

}
