import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { IUser } from '../../models/user.model';
import { Response } from '@angular/http';
import { ICafe } from '../../models/cafe.interface';
import { GetCafesService } from '../../services/getcafes/getcafes.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: IUser;
  restaurants: ICafe[];
  constructor(private userService: UserService, private getCafesService: GetCafesService) {}

  ngOnInit() {
    this.getUser();
    this.restaurants = this.getCafesService.getAllCafes();
  }

  getUser() {
    this.userService.getUserData().subscribe(
      (response: Response) => {
        const data = response.json();
        this.user = data.user;
        console.log('this.user', this.user);
       console.log('Data in profile', response.json());
      },
      (err) => console.log('err ', err),
      () => console.log('Request Completed')
   );
  }

}
