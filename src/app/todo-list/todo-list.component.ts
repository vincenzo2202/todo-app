import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
  standalone: true,
  imports: [CommonModule]
})
export class TodoListComponent implements OnInit {
  @Input() tasks: string[] = [];
  selectedTaskIndices: number[] = [];

  ngOnInit() {
    const savedSelectedIndices = localStorage.getItem('selectedTaskIndices');
    if (savedSelectedIndices) {
      this.selectedTaskIndices = JSON.parse(savedSelectedIndices);
    }
  }

  toggleTaskSelection(index: number) {
    const selectedIndex = this.selectedTaskIndices.indexOf(index);
    if (selectedIndex === -1) {
      this.selectedTaskIndices.push(index);
    } else {
      this.selectedTaskIndices.splice(selectedIndex, 1);
    }
    localStorage.setItem('selectedTaskIndices', JSON.stringify(this.selectedTaskIndices));
  }
}