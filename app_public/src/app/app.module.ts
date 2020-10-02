import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { FrameworkComponent } from './framework/framework.component';
import { AboutComponent } from './about/about.component';
import { ResourcesComponent } from './resources/resources.component';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    TeacherListComponent,
    FrameworkComponent,
    AboutComponent,
    ResourcesComponent,
    CalendarComponent,
    HomeComponent,
    TeacherFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
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
      },
      {
        path: 'teacherform',
        component: TeacherFormComponent
      }

    ]),
    ScheduleModule, RecurrenceEditorModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
