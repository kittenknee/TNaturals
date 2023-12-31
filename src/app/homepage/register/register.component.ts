import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NavbarComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  register = new FormGroup({
    name: new FormControl(''),
    contact: new FormControl(''),
    type: new FormControl(''),
    cust: new FormControl(''),
    supp: new FormControl(''),
    uname: new FormControl(''),
    pword: new FormControl(''),
    pword1: new FormControl('')
  });

  onSubmit(){

  }

  ngOnInit(): void {
      
  }

}
