import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth/auth.service';
import { LoginComponent } from './login.component';
import { IUser } from '../../models/user.model';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router;
  let authService;
  const user: IUser = {
    email: 'epam@gmail.com',
    password: '147852'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, NgbModule.forRoot(), HttpModule, RouterTestingModule ],
      providers: [AuthService],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = fixture.debugElement.injector.get(Router);
    authService = fixture.debugElement.injector.get(AuthService);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be called the login method', async() => {
    spyOn(authService, 'login')
      .and.callThrough();

    component.onLogin(user);
    fixture.detectChanges();

    expect(authService.login).toHaveBeenCalled();
  });
});
