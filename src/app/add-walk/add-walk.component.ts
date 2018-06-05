import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { Dog } from '../dog';
import Walk from '../walk';

@Component({
  selector: 'app-add-walk',
  templateUrl: './add-walk.component.html',
  styleUrls: ['./add-walk.component.scss']
})
export class AddWalkComponent implements OnInit {

  @Input() dog: Dog = new Dog();
  @Output() walkAdded: EventEmitter<Walk> = new EventEmitter();
  description: string;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    const newWalk = new Walk(new Date(), this.description);
    this.walkAdded.emit(newWalk);
  }

}
