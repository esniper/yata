import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isLoggedIn: boolean;
  currentUser: firebase.User;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUser().subscribe(user => {
        if (user) {
            this.isLoggedIn = true;
            this.currentUser = user;
        } else {
            this.isLoggedIn = false;
            this.currentUser = null;
        }
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
