import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  standalone: true,
  imports: [RouterModule, AddTaskComponent, TodoListComponent]
})
export class AppComponent implements OnInit {
  tasks: string[] = [];

  ngOnInit() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }

  onTaskAdded(task: string) {
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}