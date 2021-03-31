import { Task } from './task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InboxService {
  constructor() {}

  getTasks(): Task[] {
    return [
      {
        title: 'Preliminary Check',
        project: {
          code: 'SAU5000',
          name: 'Al-Marai Food Industries',
        },
        date: new Date(Date.now()),
        status: 'Claimed',
        deadline: new Date(Date.now()),
        isSubstituted: false,
      },
      {
        title: 'Prepare submission to LC',
        project: {
          code: 'SAU2100',
          name: 'Al-Marai Food Industries',
        },
        date: new Date(Date.now()),
        status: 'Ready',
        deadline: new Date(Date.now()),
        isSubstituted: false,
      },
      {
        title: 'Finalize Application Data Entry',
        project: {
          code: 'SAU1700',
          name: 'Al-Marai Food Industries',
        },
        date: new Date(Date.now()),
        status: 'Ready',
        deadline: new Date(Date.now()),
        isSubstituted: false,
      },
      {
        title: 'Approve Study for Product Correction',
        project: {
          code: 'SAU4440',
          name: 'Al-Marai Food Industries',
        },
        date: new Date(new Date(Date.now()).setMonth(-2)),
        status: 'Ready',
        deadline: new Date(new Date(Date.now()).setMonth(-1)),
        isSubstituted: true,
      },
      {
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
}
