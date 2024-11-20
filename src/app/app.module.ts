import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component'; // Importa tu componente
import { TodoListComponent } from './todo-list/todo-list.component'; // Importa tu componente

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([]),
        AddTaskComponent, // Importa tu componente
        TodoListComponent // Importa tu componente
    ],
    providers: [],
    // bootstrap: [AppComponent]
})
export class AppModule { }