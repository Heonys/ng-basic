import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { DisplayComponent } from './display/display.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    CounterComponent,
    DisplayComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CounterComponent,
    DisplayComponent,
    ButtonComponent
  ]
})
export class CounterModule { }
