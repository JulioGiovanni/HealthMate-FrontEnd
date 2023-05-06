import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnChanges {
  @Input() rating: number = 0;
  @Input() numeroOpiniones: number = 0;
  maxStars: number = 5;
  missingStars: number;

  constructor() {
    this.rating = 0;
    this.missingStars = this.maxStars - this.rating;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.missingStars = this.maxStars - this.rating;
  }
}
