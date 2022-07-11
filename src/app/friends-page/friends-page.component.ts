import { Component, OnInit } from '@angular/core';
import { Person } from '../../types';
import { friends, myProfileData } from '../friends';
import { Router } from '@angular/router';
import {
  FAVORITES_IDS_KEY,
  WELCOME_MESSAGE_KEY_NAME,
} from '../storageKeyNames';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.scss'],
})
export class FriendsPageComponent implements OnInit {
  myProfile: Person = myProfileData;
  friends: Person[] = friends;

  constructor(private router: Router) {}

  _shouldShowWelcomeMessage: boolean = true;

  get shouldShowWelcomeMessage(): boolean {
    return this._shouldShowWelcomeMessage;
  }

  set shouldShowWelcomeMessage(newValue) {
    localStorage.setItem(WELCOME_MESSAGE_KEY_NAME, JSON.stringify(newValue));
    this._shouldShowWelcomeMessage = newValue;
  }

  _favoriteIds: string[] = [];

  get favoriteIds(): string[] {
    return this._favoriteIds;
  }

  set favoriteIds(newFavoritesIds) {
    localStorage.setItem(FAVORITES_IDS_KEY, JSON.stringify(newFavoritesIds));
    this._favoriteIds = newFavoritesIds;
  }

  get favorites(): Person[] {
    return this.favoriteIds.map(
      (id) => this.friends.find((friend) => id === friend.id)!
    );
  }

  get nonFavorites(): Person[] {
    return this.friends.filter(
      (friend) => !this.favoriteIds.includes(friend.id)
    );
  }

  ngOnInit(): void {
    const existingFavoritesIds = JSON.parse(
      localStorage.getItem(FAVORITES_IDS_KEY) || '[]'
    );
    this._favoriteIds = existingFavoritesIds;

    const isHidden = localStorage.getItem(WELCOME_MESSAGE_KEY_NAME);
    this._shouldShowWelcomeMessage = isHidden !== 'false';
  }

  hideWelcomeMessage(): void {
    this.shouldShowWelcomeMessage = false;
  }

  addFavorite = (friendId: string): void => {
    this.favoriteIds = this.favoriteIds.concat(friendId);
  };

  removeFavorite = (friendId: string): void => {
    this.favoriteIds = this.favoriteIds.filter((id) => id !== friendId);
  };

  gotoFriendDetail = (friendId: string): void => {
    this.router.navigateByUrl(`/friends/${friendId}`);
  };
}
