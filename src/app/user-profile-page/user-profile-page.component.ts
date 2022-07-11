import { Component, OnInit } from '@angular/core';
import { myProfileData } from '../friends';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss'],
})
export class UserProfilePageComponent implements OnInit {
  myPerson = myProfileData;

  constructor() {}

  ngOnInit(): void {}
}
