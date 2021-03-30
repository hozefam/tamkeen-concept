import { Task } from './../task';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tamkeen-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;

  constructor() {}

  ngOnInit(): void {}
}
