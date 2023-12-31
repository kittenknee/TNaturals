import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { RegisterComponent } from './homepage/register/register.component';
import { SigninComponent } from './homepage/signin/signin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './homepage/home/home.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'signin', component: SigninComponent },
    { path: '**', component: PageNotFoundComponent }
];
