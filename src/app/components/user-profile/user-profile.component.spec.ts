import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../../services/user/user.service';
import { UserProfileComponent } from './user-profile.component';
import { HttpModule } from '@angular/http';
import { GetCafesService } from '../../services/getcafes/getcafes.service';
import { RestaurantItemComponent } from '../restaurant-item/restaurant-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, NgbModule, RouterTestingModule],
      declarations: [ UserProfileComponent, RestaurantItemComponent ],
      providers: [ UserService, GetCafesService, NgbTabsetConfig ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
