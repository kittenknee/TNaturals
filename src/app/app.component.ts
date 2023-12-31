import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './homepage/home/home.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
    HomepageComponent,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TNaturals';
}
