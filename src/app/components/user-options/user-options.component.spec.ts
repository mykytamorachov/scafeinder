import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../../services/user/user.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthService } from '../../services/auth/auth.service';
import { RouterTestingModule } from '@angular/router/testing';

import { UserOptionsComponent } from './user-options.component';

describe('UserOptionsComponent', () => {
  let component: UserOptionsComponent;
  let fixture: ComponentFixture<UserOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpModule, RouterTestingModule ],
      declarations: [ UserOptionsComponent ],
      providers: [ UserService, AuthService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('isPasswordEqual method should return true if password equal', async() => {
    component.password = 'password';
    component.repeatPassword = 'password';
    const res = component.isPasswordEqual();
    fixture.detectChanges();
    expect(res).toBeTruthy();
  });

  it('isPasswordEqual method should return false if password not equal', async() => {
    component.password = 'password';
    component.repeatPassword = 'passwrd';
    const res = component.isPasswordEqual();
    fixture.detectChanges();
    expect(!res).toBeTruthy();
  });

  it('isPasswordShort method should return true if password length < 6', async() => {
    component.password = '1234';
    const res = component.isPasswordShort();
    fixture.detectChanges();
    expect(res).toBeTruthy();
  });

  it('isPasswordShort method should return false if password length >= 6', async() => {
    component.password = '123456';
    const res = component.isPasswordShort();
    fixture.detectChanges();
    expect(!res).toBeTruthy();
  });

  it('isImageUrl method should return true if url ends in png, jpg, jpeg, gif, png or svg', async() => {
    component.imageUrl = 'https://static.pexels.com/photos/226589/pexels-photo-226589.jpeg';
    const res = component.isImageUrl();
    fixture.detectChanges();
    expect(res).toBeTruthy();
  });

  it('cancelInput method update fields properly', async() => {
    const input = 'inputName';
    component.userName = 'Steven';
    component.cancelInput(input);
    fixture.detectChanges();
    expect(component.userName).toBe('');
  });

});
