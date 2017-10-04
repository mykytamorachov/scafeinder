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
  image = '../../assets/img/scafeinder.jpg';
  constructor(private userService: UserService, private getCafesService: GetCafesService) {}

  ngOnInit() {
    // this.user.image = '../../assets/img/scafeinder.jpg';
    this.getUser();
  }

  getUser() {
    this.userService.getUserData().subscribe(
      (response: Response) => {
        const data = response.json();
        this.user = data.user;
        console.log('this.user', this.user);
       console.log('Data in profile', response.json());
       this.getFavoritesCafes(this.user.favorites);
      },
      (err) => console.log('err ', err)
   );
  }

  getFavoritesCafes(id) {
    this.getCafesService.getCafeById(id).subscribe(
      (restaurant: ICafe[]) => {
        console.log(restaurant);
        this.restaurants = restaurant;
        console.log('this.cafes', this.restaurants);
      },
      (err) => console.log('err ', err)
   );
  }

}
