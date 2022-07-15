import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { AppRoutingModule } from './app-routing.module';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { FriendDetailPageComponent } from './friend-detail-page/friend-detail-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NewFriendCardComponent } from './new-friend-card/new-friend-card.component';
import { NewFriendPageComponent } from './new-friend-page/new-friend-page.component';

@NgModule({
  declarations: [AppComponent, ProfileInfoComponent, PersonCardComponent, WelcomeMessageComponent, PeopleListComponent, FriendsPageComponent, UserProfilePageComponent, FriendDetailPageComponent, NavBarComponent, NotFoundPageComponent, NewFriendCardComponent, NewFriendPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
