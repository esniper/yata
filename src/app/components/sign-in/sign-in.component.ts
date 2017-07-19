import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.login();
    this.user = this.authService.getUser();
  }

  logout() {
    this.authService.logout();
  }
}
