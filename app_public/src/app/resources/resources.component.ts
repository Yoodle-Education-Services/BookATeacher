import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pageContent = {
    header: {
      title: 'Available Resources',
      strapline: 'Below are available resources that may be beneficial for you and your children during the pandemic.'
    }
  };

}
