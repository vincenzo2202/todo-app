import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  standalone: true,
  imports: [RouterModule, AddTaskComponent, TodoListComponent] // Asegúrate de importar RouterModule aquí
})
export class AppComponent {
  tasks: string[] = []; // Define la lista de tareas

  onTaskAdded(task: string) {
    this.tasks.push(task);
  }
}