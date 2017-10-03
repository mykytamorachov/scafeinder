import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ICafe } from '../../models/cafe.interface';
import { GetCafesService } from '../../services/getcafes/getcafes.service';
import { Response } from '@angular/http';
import { UserService } from '../../services/user/user.service';
import { IUser } from '../../models/user.model';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-restaurant-profile',
  templateUrl: './restaurant-profile.component.html',
  styleUrls: ['./restaurant-profile.component.scss']
})
export class RestaurantProfileComponent implements OnInit, OnDestroy {
  restaurant: ICafe;
  id: string;
  private sub: any;
  user: IUser;
  showAddToFavorites: boolean;
  indexOfFavorite: number;

  constructor(public auth: AuthService, private userService: UserService,
    private getCafesService: GetCafesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.getCafesService.getCafeById(this.id)
      .subscribe(
        (restaurant: ICafe[]) => {
          this.restaurant = restaurant[0];
        },
        (error) => console.log(error)
      );
    this.getUser();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getUser() {
    this.userService.getUserData().subscribe(
      (response: Response) => {
        const data = response.json();
        this.user = data.user;
        this.showAddToFavorites = this.isRestaurantInFavorites();
      },
      (err) => console.log('err ', err)
   );
  }

  isRestaurantInFavorites(): boolean {
    let found = false;
    this.user.favorites.forEach((element, index) => {
      if (element === this.id) {
        this.indexOfFavorite = index;
        found = true;
      }
    });
    return found;
  }

  addToFavorites() {
    this.showAddToFavorites = true;
    this.user.favorites.push(this.id);
    this.userService.updateUserData({favorites: this.user.favorites}).subscribe(
      (response: Response) => {
       console.log('response', response.json());
      },
      (err) => console.log('err ', err)
   );
  }

  removeFromFavorites() {
    this.showAddToFavorites = false;
    this.user.favorites.splice(this.indexOfFavorite, 1);
    this.userService.updateUserData({favorites: this.user.favorites}).subscribe(
      (response: Response) => {
       console.log('response', response.json());
      },
      (err) => console.log('err ', err)
   );
  }

}
