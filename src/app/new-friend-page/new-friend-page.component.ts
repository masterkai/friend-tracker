import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FRIENDS_KEY } from '../storageKeyNames';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-new-friend-page',
  templateUrl: './new-friend-page.component.html',
  styleUrls: ['./new-friend-page.component.scss'],
})
export class NewFriendPageComponent implements OnInit {
  name: string = '';
  age: string = '';
  profilePicUrl: string = '';
  bio: string = '';
  birthday: string = '';
  interests: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  nameChanged(evt: any): void {
    console.log(evt.target.value);
    this.name = evt.target.value;
  }

  ageChanged(evt: any): void {
    console.log(evt.target.value);
    this.age = evt.target.value;
  }

  bioChanged(evt: any): void {
    console.log(evt.target.value);
    this.bio = evt.target.value;
  }

  profilePicUrlChanged(evt: any): void {
    console.log(evt.target.value);
    this.profilePicUrl = evt.target.value;
  }

  birthdayChanged(evt: any): void {
    console.log(evt.target.value);
    this.birthday = evt.target.value;
  }

  interestsChanged(evt: any): void {
    console.log(evt.target.value);
    this.interests = evt.target.value;
  }

  createFriend(): void {
    const newFriend = {
      id: uuid(),
      name: this.name,
      age: Number(this.age),
      bio: this.bio,
      profilePicUrl: this.profilePicUrl,
      birthday: this.birthday,
      interests: this.interests.split(',').map((s) => s.trim()),
    };
    // Add the person to localStorage
    const existingFriends = JSON.parse(
      localStorage.getItem(FRIENDS_KEY) || '[]'
    );
    const updatedFriends = existingFriends.concat(newFriend);
    localStorage.setItem(FRIENDS_KEY, JSON.stringify(updatedFriends));

    this.router
      .navigateByUrl('/friends')
      .then(() => console.log('Friend created'));
  }
}
