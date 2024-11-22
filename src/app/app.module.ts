import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([]),
        AddTaskComponent, // Importa tu componente standalone
        TodoListComponent // Importa tu componente standalone
    ],
    providers: [],
})
export class AppModule { }