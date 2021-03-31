import { Task } from './../task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tamkeen-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [
    {
      title: 'Preliminary Check of SAU5000',
      date: new Date(Date.now()),
      status: 'Claimed',
      deadline: new Date(Date.now()),
      isSubstituted: false,
    },
    {
      title: 'Prepare submission to LC of SAU2100',
      date: new Date(Date.now()),
      status: 'Ready',
      deadline: new Date(Date.now()),
      isSubstituted: false,
    },
    {
      title: 'Finalize Application Data Entry of SAU1700',
      date: new Date(Date.now()),
      status: 'Ready',
      deadline: new Date(Date.now()),
      isSubstituted: false,
    },
    {
      title: 'Approve Study for Product Correction of SAU4440',
      date: new Date(new Date(Date.now()).setMonth(-2)),
      status: 'Ready',
      deadline: new Date(new Date(Date.now()).setMonth(-1)),
      isSubstituted: true,
    },
    {
      title: 'Preliminary Check of SAU2000',
      date: new Date(new Date(Date.now()).setMonth(-2)),
      status: 'Ready',
      deadline: new Date(new Date(Date.now()).setMonth(-1)),
      isSubstituted: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
