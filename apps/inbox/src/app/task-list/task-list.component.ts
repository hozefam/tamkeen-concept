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

  constructor(private inboxService: InboxService) {}

  ngOnInit(): void {
    this.tasks = this.inboxService.getTasks();
  }
}
