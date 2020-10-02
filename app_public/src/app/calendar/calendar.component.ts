import { Component, OnInit } from '@angular/core';
import {  DayService, WeekService,WorkWeekService, MonthService, MonthAgendaService } 
from '@syncfusion/ej2-angular-schedule';
import { View, EventSettingsModel, GroupModel } from '@syncfusion/ej2-angular-schedule';
import { tutoringEventData } from '../datasource';

import { DataManager, UrlAdaptor, Query,  ODataAdaptor,WebMethodAdaptor } from '@syncfusion/ej2-data';

import { TeacherDataService } from '../teacher-data.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-calendar',
  providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService],
  template:  `<ejs-schedule width='100%' height='550px' [selectedDate]='setDate' [currentView]='setView' [eventSettings]='eventSettings'>

  </ejs-schedule>`,
 // templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public setView: View ='WorkWeek';
  public setDate: Date = new Date(2020,9,2);
  public eventSettings: EventSettingsModel = {
    dataSource: tutoringEventData
  }
  /*public eventObject: EventSettingsModel = {
    dataSource: [{
    EventTitle: '',
    EventStart: new Date(2020,9,2,16,0),
    EventEnd: new Date(2020,9,2,18,30), 
    //IsBlock: true 
  }],
  fields: {
    subject: { name: 'Amy French Lesson' },
    startTime: { name: 'EventStart' },
    endTime: { name: 'EventEnd' }
  }
  
  }*/

  constructor() { }

  ngOnInit() {
  }

}
  /*private dataManager: DataManager = new DataManager ({
    url: 'http://localhost:3000/api', 
    crudUrl: 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false',
   adaptor: new  ODataAdaptor,
   crossDomain: true
 });

 private dataQuery: Query = new Query().from("Events");
    public eventSettings: EventSettingsModel = { dataSource: this.dataManager, query: this.dataQuery };*/

  //public calendars = Calendar[];
 //this.getCalendarByTeacherId();


  /*public setView: View ='WorkWeek';
  public setDate: Date = new Date(2020,9,2);

  private getCalendarByTeacherId(): void {
    this.route.paramMap
    .pipe(
        switchMap((params: ParamMap) => {
          let id = params.get('teacherId');
          return this.teacherDataService.getCalendarByTeacherId(id);
        })
    )
      .subscribe((newCalendar: Calendar[]) => {
        this.calendars = newCalendar;
      })
  }
*/
  /*private dataManager: DataManager = new DataManager({
    url: 'http://localhost:3000/api', // 'controller/actions'
    adaptor: new UrlAdaptor
 });
 public eventSettings: EventSettingsModel = { dataSource: this.dataManager };*/



  /*public resourceDataSource: Object[] = [
    { Name: 'Victoria Brown', Id: 1, Color: '#257EAB' },
    { Name: 'Jesus Lopez', Id: 2, Color: '#5377B3' },
    { Name: 'Chrissy Kim', Id: 3, Color: '#7E6DAF' },
    { Name: 'Bobby Johnson', Id: 4, Color: '#A2619D' }
  ]

  public groupData: GroupModel = {
    resources: ['Resources']
  };
  public eventObject: EventSettingsModel = {
    dataSource: [{
    Id: 1,  
    Subject: 'John\'s French Lesson',
    StartTime: new Date(2020,9,2,16,0),
    EndTime: new Date(2020,9,2,18,30), 
    ResourceID: 1
    //IsBlock: true 
  }, {
    Id: 2,  
    Subject: 'John\'s English Lesson',
    StartTime: new Date(2020,9,2,14,0),
    EndTime: new Date(2020,9,2,17,30), 
    ResourceID: 4
  }],*/
  /*fields: {
    subject: { name: 'EventTitle', default: "Tutoring Session" },
    startTime: { name: 'EventStart' },
    endTime: { name: 'EventEnd' }
  }*/
  
  //}

 /* [group]="groupData"
 <e-resources> 
  <e-resource field="ResourceID" title="Resource Name" name="Resources" textField="Name" idField="Id" colorField="Color" [dataSource]="resourceDataSource">
  </e-resource>
  </e-resources>
  [eventSettings]='eventSettings'
  private teacherDataService: TeacherDataService, private route: ActivatedRoute
 */



  