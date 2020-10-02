import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { FrameworkComponent } from './framework/framework.component';
import { AboutComponent } from './about/about.component';
import { ResourcesComponent } from './resources/resources.component';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { CalendarComponent } from './calendar/calendar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { RatingThumbsComponent } from './rating-thumbs/rating-thumbs.component';
import { HtmlLineBreaksPipe } from './html-line-breaks.pipe';
import { MostRecentFirstPipe } from './most-recent-first.pipe';

@NgModule({
  declarations: [
    TeacherListComponent,
    FrameworkComponent,
    AboutComponent,
    ResourcesComponent,
    CalendarComponent,
    PageHeaderComponent,
    TeacherDetailsComponent,
    DetailsPageComponent,
    RatingThumbsComponent,
    HtmlLineBreaksPipe,
    MostRecentFirstPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ScheduleModule, RecurrenceEditorModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
