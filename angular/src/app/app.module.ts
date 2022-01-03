import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './Components/tasks/tasks.component';
import { TaskIteamComponent } from './Components/task-iteam/task-iteam.component';
import { AddTaskComponent } from './Components/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskIteamComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
