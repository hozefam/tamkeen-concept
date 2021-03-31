import { TaskDetail } from './../task-detail';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Task } from '../task';
import { faLockOpen } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';

@Component({
  selector: 'tamkeen-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit, OnChanges {
  @Input() task: Task = undefined;
  @Input() taskInfo: TaskDetail = undefined;
  taskDate: string = undefined;
  faLockOpen = faLockOpen;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.taskDate = moment(this.task?.date).fromNow();
  }
}
