import { Component, OnInit } from '@angular/core';
import {  DayService, WeekService,WorkWeekService, MonthService, MonthAgendaService } 
from '@syncfusion/ej2-angular-schedule';
import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-calendar',
  providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService],
  template:  `<ejs-schedule width='75%' height='540px' [eventSettings]='eventObject' [selectedDate]='setDate' [currentView]='setView'> </ejs-schedule>`,
  //templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public setView: View ='Week';
  public setDate: Date = new Date(2020,8,19);
  public eventObject: EventSettingsModel = {
    dataSource: [{
    EventTitle: '',
    EventStart: new Date(2020,8,19,16,0),
    EventEnd: new Date(2020,8,19,18,30), 
    //IsBlock: true 
  }],
  fields: {
    subject: { name: 'EventTitle', default: "Tutoring Session" },
    startTime: { name: 'EventStart' },
    endTime: { name: 'EventEnd' }
  }
  
  }

  constructor() { }

  ngOnInit() {
  }

}
