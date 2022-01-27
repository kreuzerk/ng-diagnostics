import {Component, Input} from "@angular/core";

@Component({
  selector: 'counter',
  template: `
    <increment-counter ([counter])="counter"></increment-counter>
  `
})
export class CounterComponent {
  counter = 0;
}
