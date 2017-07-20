import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodoService {
  todos: FirebaseListObservable<Todo[]>;

  constructor(
    public af:AngularFireDatabase
  ) {
      this.todos = this.af.list('/todos') as FirebaseListObservable<Todo[]>;
  }

}
