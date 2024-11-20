import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
  standalone: true,
  imports: [CommonModule]
})
export class TodoListComponent {
  @Input() tasks: string[] = [];
}