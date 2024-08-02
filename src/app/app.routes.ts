import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginFormComponent
    },
    {
    path: 'login',
    component: LoginFormComponent
    },
    {
    path: 'sign-up',
    component: SignUpComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];