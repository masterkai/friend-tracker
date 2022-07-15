import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFriendCardComponent } from './new-friend-card.component';

describe('NewFriendCardComponent', () => {
  let component: NewFriendCardComponent;
  let fixture: ComponentFixture<NewFriendCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFriendCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFriendCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
