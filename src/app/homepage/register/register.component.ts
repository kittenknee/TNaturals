import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    RouterLink,
    NavbarComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
