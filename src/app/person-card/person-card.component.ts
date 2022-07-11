import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
})
export class PersonCardComponent implements OnInit {
  @Input() person!: Person;
  @Input() buttonName: string = '';

  constructor(private router: Router) {}

  // @Output() select = new EventEmitter<string>();

  @Input() selectFn: (personId: string) => void = () => {};

  ngOnInit(): void {}

  cardClicked(): void {
    // this.select.emit(this.person.id);
    this.selectFn(this.person.id);
  }

  gotoPersonDetail() {
    this.router.navigateByUrl(`/friends/${this.person.id}`);
  }
}
