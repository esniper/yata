// Import config
import { environment } from '../environments/environment';

// Import library modules
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

// Import services
import { AuthService } from './services/auth.service';
import { TodoService } from './services/todo.service';

const routes: Routes = [
    {
        path: '',
        component: TodoListComponent
    },
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    NavBarComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    TodoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
