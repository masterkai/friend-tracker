import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendDetailPageComponent } from './friend-detail-page.component';

describe('FriendDetailPageComponent', () => {
  let component: FriendDetailPageComponent;
  let fixture: ComponentFixture<FriendDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
