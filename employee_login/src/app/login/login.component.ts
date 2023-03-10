import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      if (user.username === this.username && user.password === this.password) {
        alert('Login successful!');
      } else {
        alert('Invalid username or password!');
      }
    } else {
      alert('User not found!');
    }
  }
}
