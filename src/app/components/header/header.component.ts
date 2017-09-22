import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
