import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { FrameworkComponent } from './framework/framework.component';
import { AboutComponent } from './about/about.component';
import { ResourcesComponent } from './resources/resources.component';

@NgModule({
  declarations: [
    TeacherListComponent,
    FrameworkComponent,
    AboutComponent,
    ResourcesComponent
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
        path: 'meetTheTeachers',
        component: TeacherListComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
