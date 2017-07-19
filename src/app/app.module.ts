import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

import { AuthService } from './services/auth.service';

const routes: Routes = [
    {
        path: '',
        component: TodoListComponent
    },
    {
        path: 'sign-in',
        component: SignInComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    SignInComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
