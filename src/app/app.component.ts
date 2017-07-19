import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './services/auth.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: Observable<firebase.User>;

  constructor(private authService: AuthService) {
    this.user = authService.getUser();
  }
}
