import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './Components/tasks/tasks.component';
import { TaskIteamComponent } from './Components/task-iteam/task-iteam.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskIteamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
