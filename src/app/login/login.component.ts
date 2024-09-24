import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  template: `
    <form (ngSubmit)="onSubmit()">
      <label>Username:</label>
      <input type="text" [(ngModel)]="username">
      <br>
      <label>Password:</label>
      <input type="password" [(ngModel)]="password">
      <br>
      <button type="submit">Login</button>
    </form>
  `
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe((response) => {
      // TO DO: handle login response here
      console.log('Login successful');
    }, (error) => {
      console.error('Login failed');
    });
  }
}