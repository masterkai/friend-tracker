import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../types';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
})
export class PersonCardComponent implements OnInit {
  @Input() person!: Person;
  @Output() select = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  cardClicked(): void {
    this.select.emit(this.person.id);
  }
}
