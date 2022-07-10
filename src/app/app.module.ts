import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { PeopleListComponent } from './people-list/people-list.component';

@NgModule({
  declarations: [AppComponent, ProfileInfoComponent, PersonCardComponent, WelcomeMessageComponent, PeopleListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
