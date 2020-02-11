import { Component } from '@angular/core';
import { Todo } from 'src/Models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = 'Minhas Tarefas';

  constructor() {
    this.todos.push(new Todo(1, 'passer com meu cachorro', true));
    this.todos.push(new Todo(2, 'ir ao supermecado', false));
  }
}
