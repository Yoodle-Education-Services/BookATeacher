import { Component, OnInit } from '@angular/core';
import { TeacherDataService } from '../teacher-data.service';

export class Teacher {
  _id: string;
  name: string;
  payRate: string;
  bioText: string;
  specialities: string [];
  rating: number;

}

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  constructor(private teacherDataService: TeacherDataService) { }


  public teachers: Teacher[]; 

  ngOnInit() { 
    this.getTeachers(); 
  }

  private getTeachers(): void {
    this.teacherDataService
      .getTeachers()
        .then(foundTeachers => this.teachers = foundTeachers);
  }

}
