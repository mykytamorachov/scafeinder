import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  user: User;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.user = new User();
    this.auth.logout();
  }

  onLogin(user: User) {
    console.log('onLogin user is ', this.user);
    this.auth.login(this.user).subscribe(
      data => {
        console.log('onLogin data is ', data);
      },
      err => console.log('onLogin err is ', err),
      () => console.log('Request Completed')
   );
  }
}

export class User {
  email: string;
  password: string;
}
