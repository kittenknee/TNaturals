import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { RegisterComponent } from './homepage/register/register.component';
import { SigninComponent } from './homepage/signin/signin.component';


export const routes: Routes = [
    { path: 'homepage', component: HomepageComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'register', component: SigninComponent },
];
