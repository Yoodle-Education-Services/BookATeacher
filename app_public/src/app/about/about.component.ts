import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pageContent = {
    header : {
      title : 'About Book A Teacher',
      strapline: 'Safe learning from home with one session at a time.'   
    },
    content : 'Book A Teacher aims to solve the problem of students not having access to daily in-person instruction. With Book A Teacher, parents will be able to connect and request services from qualified educators. Book A Teacher is available to teachers who are out of a job due to the pandemic or to teachers who want to earn extra cash. These teachers can find work on their own time and at their own rate.' 
  };

}
