import { Component, OnInit } from '@angular/core';
import { TeacherDataService } from '../teacher-data.service';

export class Teacher {
  _id: string;
  name: string;
  age: string;
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

  teachers: Teacher[] = [{
    _id: '5f551a57ab5e50cf3f3af330',
    name: 'Bobby Johnson',
    age: '35 years old',
    payRate: '$20-35/hr',
    bioText: 'I\'ve been a teacher for seven years in the Kansas City Metro area. I have my certification in secondary education. During these trying times, teaching your child is a tremendous responsibility and I will do my best to ensure that your student has a safe and motivating learning experience.',
    specialities: ['Middle school', 'Social Studies', 'English'],
    rating: 4
  }];

  ngOnInit() { 
    this.getTeachers();
  }

  private getTeachers(): void {
    this.teacherDataService
      .getTeachers()
        .then(foundTeachers => this.teachers = foundTeachers);
  }

}
