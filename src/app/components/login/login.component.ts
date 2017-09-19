import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: IUser;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.user = {};
    this.auth.logout();
  }

  onLogin(user: IUser) {
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
