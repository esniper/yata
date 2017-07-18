import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

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
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
