import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [{ path: '', component: TaskListComponent }];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TaskListComponent,
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
