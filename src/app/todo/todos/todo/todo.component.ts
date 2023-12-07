import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../share/todo.model';

@Component({
  selector: 'app-todo',
  template: `
    <input type="checkbox" [checked]="todo.done" />
    <label>{{ todo.text }}</label>
  `,
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  constructor() {
    this.todo = { done: false, text: '' };
  }

  ngOnInit() {}
}
