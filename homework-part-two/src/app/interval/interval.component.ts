import { Component, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css'],
})
export class IntervalComponent implements OnDestroy {
  oneSecond: any;

  constructor() {
    interval(500);
  }

  goInterval() {
    this.oneSecond = interval(1000).subscribe((value) => {
      console.log('One second ' + value);
    });
  }

  stopInterval() {
    this.oneSecond.unsubscribe();
  }

  ngOnDestroy(): void {
    if (this.oneSecond) {
      this.oneSecond.unsubscribe();
    }
  }
}
