import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFriendPageComponent } from './new-friend-page.component';

describe('NewFriendPageComponent', () => {
  let component: NewFriendPageComponent;
  let fixture: ComponentFixture<NewFriendPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFriendPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFriendPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
