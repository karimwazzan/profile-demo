import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '@interfaces/User';
import { Subscription } from 'rxjs';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  id: string;
  userData!: User | undefined;
  subscriptions = new Array<Subscription>();

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) {
    this.id = '';
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = id;
      this.getUserData();
    }
  }

  getUserData() {
    this.subscriptions.push(
      this.userService.getUser(this.id).subscribe(user => this.userData = user));
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    for (let sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }

}
