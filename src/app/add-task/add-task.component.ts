import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass'],
  standalone: true,
  imports: [FormsModule]
})
export class AddTaskComponent {
  @Output() taskAdded = new EventEmitter<string>();
  newTask: string = '';

  addTask() {
    if (this.newTask.trim()) {
      this.taskAdded.emit(this.newTask);
      this.newTask = '';
    }
  }
}