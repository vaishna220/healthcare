"import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})

  export class SigninComponent {
    username: string = '';
    password: string = '';
  signinForm: any;
  
  
    constructor(private router: Router,private authService: DataService) {}
    signin() {
      if (this.username === 'admin' && this.password === 'password') {
        this.authService.login();
        this.router.navigate(['/home/dashboard']);
      } else {
        alert('Invalid credentials');
      }
      this.signinForm.reset();
    }
  
  
  }
  


