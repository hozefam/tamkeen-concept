import { TaskDetail } from './../task-detail';
import { InboxService } from './../inbox.service';
import { Task } from './../task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tamkeen-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  taskInfo: TaskDetail = undefined;
  selectedTask: Task = undefined;

  constructor(private inboxService: InboxService) {}

  ngOnInit(): void {
    this.tasks = this.inboxService.getTasks();
  }

  selectTask(id, task) {
    this.taskInfo = this.inboxService.getTask(id);
    this.selectedTask = task;
  }
}
