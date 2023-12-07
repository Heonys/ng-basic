import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Output() onChange = new EventEmitter();

  handleChnage(flag: 'plus' | 'minus') {
    if (flag === 'plus') {
      this.onChange.emit(flag);
    } else {
      this.onChange.emit(flag);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
