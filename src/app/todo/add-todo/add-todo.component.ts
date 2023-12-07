import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `
    <button (click)="addTodo(newText)">+</button>
    <input type="text" placeholder="할일 추가" [(ngModel)]="newText" />
  `,
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @Output() onTodoAdded = new EventEmitter();
  newText: string;
  constructor() {
    this.newText = '';
  }

  addTodo(newText: string) {
    this.onTodoAdded.emit(newText);
    this.newText = '';
  }

  ngOnInit(): void {}
}
