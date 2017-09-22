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
  test: any;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = {};
    this.auth.logout();
  }

  onLogin(user: IUser) {
    this.auth.login(this.user).subscribe(
      data => {
        this.router.navigate(['/']);   // this.router.navigate(['/profile']);
      },
      err => console.log('onLogin err is ', err),
      () => console.log('Request Completed')
   );
  }
}
