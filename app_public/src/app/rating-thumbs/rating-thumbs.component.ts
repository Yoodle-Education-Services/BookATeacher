import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating-thumbs',
  templateUrl: './rating-thumbs.component.html',
  styleUrls: ['./rating-thumbs.component.css']
})
export class RatingThumbsComponent implements OnInit {

  @Input() rating: number;

  constructor() { }

  ngOnInit() {
  }

}
