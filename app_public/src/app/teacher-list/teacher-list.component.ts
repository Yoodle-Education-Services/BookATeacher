import { Component, OnInit } from '@angular/core';
import { TeacherDataService } from '../teacher-data.service';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css'],
  providers: [TeacherDataService]
})
export class TeacherListComponent implements OnInit {

  constructor(private teacherDataService: TeacherDataService) { }


  public teachers: Teacher[];

  private getTeachers(): void {
    this.teacherDataService
      .getTeachers()
      .then(foundTeachers => this.teachers = foundTeachers);
  }
  public pageContent = {
    header: {
      title: 'Meet your future teacher!',
      strapline: 'Below list qualified teachers who want to help your child, or children, with their work during the pandemic.'
    }
  };

  ngOnInit() {
    this.getTeachers();
  }

  /*private getTeachers(): void {
    this.teacherDataService
      .getTeachers()
      .then(foundTeachers => this.teachers = foundTeachers);
  }
  public pageContent = {
    header: {
      title: 'Meet your future teacher!',
      strapline: 'Below list qualified teachers who want to help your child, or children, with their work during the pandemic.'
    }
  };*/
}
