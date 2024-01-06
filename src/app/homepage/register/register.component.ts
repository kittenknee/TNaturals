import { Component, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
// import { PhpCommandsService } from '../../php-executions/php-commands.service';
import { HttpClientModule } from '@angular/common/http';
// import { UsersService } from '../../services/users.service';

declare var bootstrap: any;

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,    
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HttpClientModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
@Injectable()
export class RegisterComponent implements OnInit {
  viewPword = true;
  viewRPword = true;
  registerForm!: FormGroup;
  success: boolean = false;
  toastmessage!: string;

  constructor(private fb: FormBuilder){} //, private userService: UsersService

  viewPass(){
    const x = document.getElementById("pword") as HTMLInputElement;
    x.type = "text";
    this.viewPword = false;
  }
  hidePass(){
    const x = document.getElementById("pword") as HTMLInputElement;
    x.type = "password";
    this.viewPword = true;
  }
  viewRPass(){
    const x = document.getElementById("pword1") as HTMLInputElement;
    x.type = "text";
    this.viewRPword = false;
  }
  hideRPass(){
    const x = document.getElementById("pword1") as HTMLInputElement;
    x.type = "password";
    this.viewRPword = true;
  }

  onSubmit(){
    if(this.registerForm.valid){
      console.table(this.registerForm.value);
      // Add more functions here
      // this.userService.addUserCreds(this.registerForm.value);
      this.toast("some data");
      this.registerForm.reset();
    }
    else{
      console.log('Register form filled is invalid')
      this.registerForm.markAllAsTouched();
    }
  }

  get name(){
    return this.registerForm.get('name');
  }
  get contact(){
    return this.registerForm.get('contact');
  }
  get type(){
    return this.registerForm.get('type');
  }
  get uname(){
    return this.registerForm.get('uname');
  }
  get pword(){
    return this.registerForm.get('pword');
  }
  get pword1(){
    return this.registerForm.get('pword1');
  }

  ngOnInit(){
    this.registerForm = this.fb.group({
      name: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(25),Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
      contact: new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      type: new FormControl('',[Validators.required]),
      uname: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20),Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
      pword: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20),Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
      pword1: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20),Validators.pattern("[a-zA-Z][a-zA-Z ]+")])
    });    
    this.toast("NgOnInit data");
  }

  toast(data: string){
    this.toastmessage = data;
    var toastElList = document.getElementById('registerResponseToast');
    var toast = new bootstrap.Toast(toastElList, { delay: 3000 }); // Set your desired delay
  
    // Example: Show the toast
    toast.show();
  }

}
