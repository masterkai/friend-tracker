import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../../types';
import { friends } from '../friends';

@Component({
  selector: 'app-friend-detail-page',
  templateUrl: './friend-detail-page.component.html',
  styleUrls: ['./friend-detail-page.component.scss'],
})
export class FriendDetailPageComponent implements OnInit {
  selectedFriend: Person | undefined = undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const friendId = this.route.snapshot.paramMap.get('friendId');
    this.selectedFriend = friends.find((friend) => friend.id === friendId);
    // console.log(this.selectedFriend);
    if (!this.selectedFriend) {
      setTimeout(() => {
        this.router.navigateByUrl('/');
      }, 2500);
    }
  }
}
