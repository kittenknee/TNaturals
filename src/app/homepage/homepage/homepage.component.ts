import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { Router } from 'express';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    RouterLink,
    NavbarComponent,
    HomeComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
