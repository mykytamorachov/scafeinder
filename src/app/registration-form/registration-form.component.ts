import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;
  post: any;
  name: string;
  email: string;
  mobile: number;
  password: any;
  passwordRepeat: any;
  registrationShow = true;
  @Output() form: EventEmitter<boolean> = new EventEmitter<boolean>();
  showForm() {
    this.form.emit(true);
  }

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = formBuilder.group({
      'name': [null, Validators.required],
      'email': [null, Validators.email],
      'mobile': [null, Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      'passwordRepeat': [null, Validators.required]
    }, {validator: this.matchingPasswords('password', 'passwordRepeat')});
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

  addUser(user) {
    this.name = user.name;
    this.email = user.email;
    this.mobile = user.mobile;
    this.password = user.password;
  }
}
