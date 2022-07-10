import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.scss'],
})
export class WelcomeMessageComponent implements OnInit {
  @Input() name!: string;
  @Input() isHidden: boolean = false;
  @Output() hide = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  hideWelcomeMessage() {
    this.hide.emit();
  }
}
