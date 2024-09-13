import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerData = {
    email: '',
    name: '',
    password: ''
  };

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  onSubmit() {
    
    console.log('Registro de usuario:', this.registerData);

    
    this.router.navigate(['/home']); 
  }

  navigateToLogin() {
    this.router.navigate(['/login']); 
  }
}
