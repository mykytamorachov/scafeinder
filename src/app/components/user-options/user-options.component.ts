import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { IUser } from '../../models/user.model';
import { Response } from '@angular/http';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.scss']
})
export class UserOptionsComponent implements OnInit {
  @Input() user: IUser;
  fullName: boolean;
  profileImage: boolean;
  userPassword: boolean;
  password: string;
  repeatPassword: string;
  deleteAccount: boolean;
  constructor(private userService: UserService, private auth: AuthService) {
    this.password = '';
    this.repeatPassword = '';
  }

  ngOnInit() {
  }

  updateName(event) {
    this.fullName = false;
    this.userService.updateUserData({name: event}).subscribe(
      (response: Response) => {
       console.log('response', response.json());
      },
      (err) => console.log('err ', err)
   );
  }

  updateImage(event) {
    this.profileImage = false;
    this.userService.updateUserData({image: event}).subscribe(
      (response: Response) => {
       console.log('response', response.json());
      },
      (err) => console.log('err ', err)
   );
  }

  updatePassword(event) {
    this.userPassword = false;
    this.userService.updateUserData({password: event}).subscribe(
      (response: Response) => {
       console.log('response', response.json());
      },
      (err) => console.log('err ', err)
   );
  }

  deleteUser() {
    this.userService.deleteUserData().subscribe(
      (response: Response) => {
       console.log('response', response.json());
       this.auth.logout();
      },
      (err) => console.log('err ', err)
   );
  }

  isPasswordEqual(): boolean {
    return this.password === this.repeatPassword;
  }

  isPasswordShort(): boolean {
    if (this.password === '') {
      return false;
    }
    return this.password.length < 6;
  }
}
