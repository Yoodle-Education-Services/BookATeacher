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
      title : 'About Book A Teacher'   
    },
    content : 'Aliqua consequat ut velit in nostrud commodo. In sit incididunt in labore mollit sunt dolore ullamco cillum commodo sunt cillum. Irure pariatur sunt voluptate aliquip ut nulla. Aliqua in veniam sint consequat velit veniam ut ut laboris. Est magna excepteur cillum velit velit consectetur aliquip magna irure pariatur dolor dolor eu sit. Tempor pariatur nostrud do pariatur exercitation duis consequat amet consequat. Commodo anim irure officia laboris occaecat sit aute amet fugiat anim deserunt duis'
  };

}
