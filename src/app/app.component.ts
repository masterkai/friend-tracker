import { Component } from '@angular/core';
import { friends } from './friends';
import { Person } from '../types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  shouldShowWelcomeMessage: boolean = true;
  myPerson = {
    id: '123',
    name: 'user A',
    profilePicUrl: 'assets/user-icon.png',
    age: 100,
    bio: 'I like programming',
    birthday: 'September 1',
    interests: ['Programming', 'sleeping', 'Basketball', 'reading'],
  };
  friends: Person[] = friends;
  favoriteIds: string[] = [];

  hideWelcomeMessage(): void {
    this.shouldShowWelcomeMessage = false;
  }

  toggleFavorite(friendId: string): void {
    if (this.favoriteIds.includes(friendId)) {
      this.favoriteIds = this.favoriteIds.filter((id) => id !== friendId);
    } else {
      this.favoriteIds.push(friendId);
    }
  }
}
