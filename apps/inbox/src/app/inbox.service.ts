import { TaskDetail } from './task-detail';
import { Task } from './task';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class InboxService {
  constructor() {}

  getTasks(): Task[] {
    return [
      {
        id: 1,
        title: 'Preliminary Check',
        project: {
          code: 'SAU5000',
          name: 'Al-Marai Food Industries',
        },
        date: new Date(_.now()),
        status: 'Claimed',
        deadline: new Date(_.now()),
        isSubstituted: false,
      },
      {
        id: 2,
        title: 'Prepare submission to LC',
        project: {
          code: 'SAU2100',
          name: 'Al-Marai Food Industries',
        },
        date: new Date(_.now()),
        status: 'Ready',
        deadline: new Date(_.now()),
        isSubstituted: false,
      },
      {
        id: 3,
        title: 'Finalize Application Data Entry',
        project: {
          code: 'SAU1700',
          name: 'Al-Marai Food Industries',
        },
        date: new Date(_.now()),
        status: 'Ready',
        deadline: new Date(_.now()),
        isSubstituted: false,
      },
      {
        id: 4,
        title: 'Approve Study for Product Correction',
        project: {
          code: 'SAU4440',
          name: 'Al-Marai Food Industries',
        },
        date: new Date(new Date(_.now()).setMonth(-2)),
        status: 'Ready',
        deadline: new Date(new Date(_.now()).setMonth(-1)),
        isSubstituted: true,
      },
      {
        id: 5,
        title: 'Preliminary Check',
        project: {
          code: 'SAU2000',
          name: 'Al-Marai Food Industries',
        },
        date: new Date(new Date(Date.now()).setMonth(-2)),
        status: 'Ready',
        deadline: new Date(new Date(Date.now()).setMonth(-1)),
        isSubstituted: false,
      },
    ];
  }

  getTask(id: number): TaskDetail {
    const taskDetails = [
      {
        id: 1,
        project: {
          code: 'SAU5000',
          name: 'Al-Marai Food Industries',
        },
      },
      {
        id: 2,
        project: {
          code: 'SAU2100',
          name: 'Al-Marai Food Industries',
        },
      },
      {
        id: 3,
        project: {
          code: 'SAU1700',
          name: 'Al-Marai Food Industries',
        },
      },
      {
        id: 4,
        project: {
          code: 'SAU4440',
          name: 'Al-Marai Food Industries',
        },
      },
      {
        id: 5,
        project: {
          code: 'SAU2000',
          name: 'Al-Marai Food Industries',
        },
      },
    ];

    return taskDetails.find((x) => x.id === id);
  }
}
