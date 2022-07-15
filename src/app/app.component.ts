import { Component, OnInit } from '@angular/core';
import { friends as starterFriends } from './friends';
import { FRIENDS_KEY } from './storageKeyNames';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    if (!localStorage.getItem(FRIENDS_KEY)) {
      localStorage.setItem(FRIENDS_KEY, JSON.stringify(starterFriends));
    }
  }
}
