import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { FrameworkComponent } from './framework/framework.component';
import { AboutComponent } from './about/about.component';
import { ResourcesComponent } from './resources/resources.component';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    TeacherListComponent,
    FrameworkComponent,
    AboutComponent,
    ResourcesComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: TeacherListComponent
      },
      {
        path: 'teachers',
        component: TeacherListComponent
      }, 
      {
        path:'calendar',
        component: CalendarComponent
      },
      {
        path:'resources',
        component: ResourcesComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }

    ]),
    ScheduleModule, RecurrenceEditorModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
