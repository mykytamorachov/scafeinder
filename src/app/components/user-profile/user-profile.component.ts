import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUserData().subscribe(
      data => {
       console.log('Data in profile', data);
      },
      err => console.log('err ', err),
      () => console.log('Request Completed')
   );
  }

}
