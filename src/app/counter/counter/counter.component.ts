import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  count: number = 0;
  visible: boolean = false;

  constructor() {}

  handleChnage(flag: 'plus' | 'minus') {
    if (flag === 'plus') {
      this.count++;
    } else {
      this.count--;
    }
  }
  handleClick() {
    this.visible = !this.visible;
  }

  ngOnInit(): void {}
}
