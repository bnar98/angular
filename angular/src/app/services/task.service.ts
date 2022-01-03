import { Injectable } from '@angular/core';
import { TASKS } from 'src/mock-task';
import { Task } from 'src/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, of } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:5000/tasks"

  constructor(private http: HttpClient) { }
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
  addTask(task: Task) {
    return this.http.post<Task>(this.apiUrl, task, httpOptions)
  }
}
