import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'increment-counter',
  template: `
    <div>Counter: {{counter}}</div>
    <button (click)="increment()">Increment</button>
  `,
  styleUrls: ['./increment-counter.component.scss']
})
export class IncrementCounterComponent {
  @Input() counter: number;
  @Output() counterChange = new EventEmitter();

  increment() {
    this.counterChange.next(++this.counter);
  }
}

