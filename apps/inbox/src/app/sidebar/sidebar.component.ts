import { Component, OnInit } from '@angular/core';
import {
  faInbox,
  faStar,
  faArchive,
  faTasks,
  faArrowLeft,
  faCog,
  faUsersCog,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tamkeen-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  faInbox = faInbox;
  faStar = faStar;
  faArchive = faArchive;
  faTasks = faTasks;
  faArrowLeft = faArrowLeft;
  faCog = faCog;
  faUsersCog = faUsersCog;

  constructor() {}

  ngOnInit(): void {}
}
