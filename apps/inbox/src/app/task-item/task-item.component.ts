import { Task } from './../task';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';

@Component({
  selector: 'tamkeen-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  faLockOpen = faUnlock;
  isBreached: boolean;
  taskDate: string;

  @Input() task: Task;
  @Output() selectTask = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    this.isBreached = this.task.deadline <= this.task.date;
    this.taskDate = moment(this.task.date).fromNow();
  }

  setSelectedTask(id: number) {
    this.selectTask.emit(id);
  }
}
