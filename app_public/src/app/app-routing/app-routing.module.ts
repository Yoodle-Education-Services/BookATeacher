import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '../about/about.component';
import { TeacherListComponent } from '../teacher-list/teacher-list.component';
import { ResourcesComponent } from '../resources/resources.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { DetailsPageComponent } from '../details-page/details-page.component';


const routes: Routes = [
  {
    path: 'teachers',
        component: TeacherListComponent
      }, 
      {
        path: 'teachers/:teacherId',
        component: DetailsPageComponent
      },
      {
        path:'teachers/:teacherId/calendar',
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
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
