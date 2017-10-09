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
  cafesFound: boolean;
  constructor(private userService: UserService, private getCafesService: GetCafesService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUserData().subscribe(
      (response: Response) => {
        const data = response.json();
        this.user = data.user;
        if (this.user.image == null) {
          this.user.image = '../../assets/img/scafeinder.jpg';
        }
        if (this.user.favorites.length !== 0) {
       this.getFavoritesCafes(this.user.favorites);
      }
      },
      (err) => console.log('err ', err)
   );
  }

  getFavoritesCafes(id) {
    this.getCafesService.getCafeById(id).subscribe(
      (restaurant: ICafe[]) => {
        this.restaurants = restaurant;
        this.cafesFound = true;
      },
      (err) => {
        this.cafesFound = false;
      }
   );
  }

}
