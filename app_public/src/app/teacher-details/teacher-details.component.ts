import { Component, OnInit, Input } from '@angular/core';
import { Teacher, Review } from '../teacher';
import { TeacherDataService } from '../teacher-data.service';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {

  @Input() teacher: Teacher;

  public formVisible: boolean = false;

  private resetAndHideReviewForm(): void {
    this.formVisible = false;
    this.newReview.author = '';
    this.newReview.rating = 5;
    this.newReview.reviewText = '';
  }

  public newReview: Review = {
    author: '',
    rating: 5,
    reviewText: ''
  };

  public formError: string;

  private formIsValid(): boolean {
    if (this.newReview.author && this.newReview.rating && this.newReview.reviewText) {
      return true;
    } else {
      return false;
    }
  }

  public onReviewSubmit(): void {
    this.formError = '';
    if (this.formIsValid()) {
        console.log(this.newReview);
        this.teacherDataService.addReviewByTeacherId(this.teacher._id, this.newReview)
        .then((review: Review) => {
          console.log('Review saved', review)
          let reviews = this.teacher.reviews.slice(0);
          reviews.unshift(review);
          this.teacher.reviews = reviews;
          this.resetAndHideReviewForm();
        })
  } else {
    console.log('Not valid')
    this.formError = 'All fields required, please try again';
  }

}

  constructor(private teacherDataService: TeacherDataService) { }

  ngOnInit() {
  }

}
