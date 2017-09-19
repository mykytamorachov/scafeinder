import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  post: any;
  name: string;
  email: string;
  mobile: number;
  password: any;
  confirmPassword: any;
  registrationShow = true;
  responseStatus: Object = [];
  @Output() form: EventEmitter<boolean> = new EventEmitter<boolean>();
  showForm() {
    this.form.emit(true);
  }

  constructor(private auth: AuthService, private formBuilder: FormBuilder) {
    this.registrationForm = formBuilder.group({
      'name': [null, Validators.required],
      'email': [null, Validators.email],
      'mobile': [null, Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      'confirmPassword': [null, Validators.required]
    }, {validator: this.matchingPasswords('password', 'confirmPassword')});
  }

  ngOnInit() {
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): {[key: string]: any} => {
      const password = group.controls[passwordKey];
      const confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        confirmPassword.setErrors( {mismatchedPasswords: true} );
        return {
          mismatchedPasswords: true
        };
      }
    };
  }

  onRegister(user: IUser): void {
    this.auth.register({
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      password: user.password,
      confirmPassword: user.confirmPassword})
      .subscribe(
        data => {
          // localStorage.setItem('token', data.json().auth_token);
          console.log('onRegister data is ', this.responseStatus = data);
        },
        err => console.log(err),
        () => console.log('Request Completed')
      );
  }
}
