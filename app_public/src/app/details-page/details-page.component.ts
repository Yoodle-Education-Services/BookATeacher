import { Component, OnInit } from '@angular/core';
import { TeacherDataService } from '../teacher-data.service';
import { Teacher } from '../teacher'
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  constructor(private teacherDataService: TeacherDataService, private route: ActivatedRoute) { }

  public newTeacher: Teacher;

  ngOnInit(): void { 
    this.route.paramMap
    .pipe(
        switchMap((params: ParamMap) => {
          let id = params.get('teacherId');
          return this.teacherDataService.getTeacherById(id);
        })
    )
      .subscribe((newTeacher: Teacher) => {
        this.newTeacher = newTeacher;
        this.pageContent.header.title = newTeacher.name;
      })
  }
  public pageContent = {
    header: {
      title: '',
      strapline: '',
    }
  };
}
