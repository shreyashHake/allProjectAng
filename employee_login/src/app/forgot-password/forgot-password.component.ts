import { Component } from '@angular/core';

interface User {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent {
  email: string = '';

  onSubmit() {

    const usersJson = localStorage.getItem('users');
    const users = usersJson ? JSON.parse(usersJson) as User[] : [];

    const user = users.find((u: User) => u.email === this.email);

    if (user) {
      alert(`Password reset instructions have been sent to ${this.email}.`);
    } else {
      alert(`User with email ${this.email} does not exist.`);
    }
  }
}
