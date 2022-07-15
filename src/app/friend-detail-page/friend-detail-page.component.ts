import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../../types';
import { FAVORITES_IDS_KEY, FRIENDS_KEY } from '../storageKeyNames';

@Component({
  selector: 'app-friend-detail-page',
  templateUrl: './friend-detail-page.component.html',
  styleUrls: ['./friend-detail-page.component.scss'],
})
export class FriendDetailPageComponent implements OnInit {
  selectedFriend: Person | undefined = undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  _favoriteIds: string[] = [];

  get favoriteIds(): string[] {
    return this._favoriteIds;
  }

  set favoriteIds(newFavoritesIds) {
    localStorage.setItem(FAVORITES_IDS_KEY, JSON.stringify(newFavoritesIds));
    // setCookie(FAVORITES_IDS_KEY, JSON.stringify(newFavoritesIds), 10);

    this._favoriteIds = newFavoritesIds;
  }

  ngOnInit(): void {
    const existingFriends: Person[] = JSON.parse(
      localStorage.getItem(FRIENDS_KEY) || '[]'
    );
    this.favoriteIds = JSON.parse(
      // @ts-ignore
      localStorage.getItem(FAVORITES_IDS_KEY),
      '[]'
    );
    const friendId = this.route.snapshot.paramMap.get('friendId');
    this.selectedFriend = existingFriends.find(
      (friend) => friend.id === friendId
    );
    // console.log(this.selectedFriend);
    if (!this.selectedFriend) {
      setTimeout(() => {
        this.router.navigateByUrl('/friends');
      }, 2500);
    }
  }

  addFavorite = (): void => {
    this.favoriteIds = this.favoriteIds.concat(this.selectedFriend!.id);
  };

  removeFavorite = (): void => {
    this.favoriteIds = this.favoriteIds.filter(
      (id) => id !== this.selectedFriend!.id
    );
  };
}
