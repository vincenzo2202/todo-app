import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AddTaskComponent } from './app/add-task/add-task.component';
import { TodoListComponent } from './app/todo-list/todo-list.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, RouterModule.forRoot([])),
    AddTaskComponent,
    TodoListComponent
  ]
}).catch(err => console.error(err));