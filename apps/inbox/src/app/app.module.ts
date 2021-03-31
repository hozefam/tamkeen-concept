import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskSearchComponent } from './task-search/task-search.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskCommentsComponent } from './task-comments/task-comments.component';

const routes: Routes = [{ path: '', component: TaskListComponent }];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskSearchComponent,
    TaskDetailComponent,
    TaskCommentsComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
