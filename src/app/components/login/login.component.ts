import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: IUser;
  responseData: any;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = {};
  }

  onLogin(user: IUser) {
    this.auth.login(this.user).subscribe(
      data => {
        this.responseData = data;
      },
      err => console.log('onLogin err is ', err)
   );
  }
}
