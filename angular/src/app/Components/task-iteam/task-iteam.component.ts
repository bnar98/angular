import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/Task';

@Component({
  selector: 'app-task-iteam',
  templateUrl: './task-iteam.component.html',
  styleUrls: ['./task-iteam.component.scss']
})
export class TaskIteamComponent implements OnInit {
  @Input() task: Task | undefined;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  ondelete(task: any) {
    this.deleteTask.emit(task);
  }

}
