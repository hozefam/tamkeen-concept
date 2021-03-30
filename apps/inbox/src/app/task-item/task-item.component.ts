import { Task } from './../task';
import { Component, Input, OnInit } from '@angular/core';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tamkeen-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  faLockOpen = faUnlock;
  isBreached: boolean;

  @Input() task: Task;

  constructor() {}

  ngOnInit(): void {
    this.isBreached = this.task.deadline <= this.task.date;
  }
}
