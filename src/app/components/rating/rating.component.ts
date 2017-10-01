import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() rating: Number;

  constructor() { }

  ngOnInit() {
  }

  getRating(rating) {
    const ratingValue = parseFloat(rating);
    const ratingSize = ratingValue / 5 * 100;
    return ratingSize + '%';
  }
}
