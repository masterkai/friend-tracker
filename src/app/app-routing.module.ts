import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { FriendDetailPageComponent } from './friend-detail-page/friend-detail-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NewFriendPageComponent } from './new-friend-page/new-friend-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/friends',
  },
  {
    path: 'friends',
    component: FriendsPageComponent,
  },
  {
    path: 'new-friend',
    component: NewFriendPageComponent,
  },
  {
    path: 'user-profile',
    component: UserProfilePageComponent,
  },
  {
    path: 'friends/:friendId',
    pathMatch: 'full',
    component: FriendDetailPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
