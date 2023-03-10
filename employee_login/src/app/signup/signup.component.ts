import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  email: string = '';

  onSubmit() {
    const data = { username: this.username, password: this.password, email: this.email };
    localStorage.setItem('user', JSON.stringify(data));
    alert('User registered successfully!');
  }
}
