import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  private counter: number;

  @Input() title: string;
  @Output() wasClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.counter = 0;
  }

  onClick(add: boolean) {
    this.counter = add ? this.counter + 1: this.counter - 1;
    this.wasClicked.emit(this.counter);
  }
}
