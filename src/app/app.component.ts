import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myPerson = {
    name: 'user A',
    profilePicUrl: 'assets/user-icon.png',
    age: 100,
    bio: 'I like programming',
    birthday: 'September 1',
    interests: ['Programming', 'sleeping', 'Basketball', 'reading'],
  };
}
