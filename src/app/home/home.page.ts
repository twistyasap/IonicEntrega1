import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user = {
    username: '',
    password: '',
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Formulario enviado', this.user);
    
  }

  navigateToRegister() {
    this.router.navigate(['/register']); 
  }

  navigateToLogin() {
    
    this.router.navigate(['/login'], {
      state: { username: this.user.username }  // Envía el username
    });
  }
}
