import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { User } from '@interfaces/User';
import { TitleService } from '@services/title.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-profile-details-tab',
  templateUrl: './profile-details-tab.component.html',
  styleUrls: ['./profile-details-tab.component.scss']
})
export class ProfileDetailsTabComponent implements OnInit, AfterViewInit {

  subscriptions = new Array<Subscription>();

  private dataSubject = new BehaviorSubject<User>({} as User);
  private detailsSubject = new BehaviorSubject<Map<string, string>>(new Map());

  @Input()
  set userData(value) {
    this.dataSubject.next(value);
  };

  get userData() {

    return this.dataSubject.getValue();
  }

  get detailsMap() {

    return this.detailsSubject.getValue();
  }

  constructor(private titleService: TitleService) {


  }
  ngAfterViewInit(): void {
    this.titleService.setTitle('Profile: ' + this.userData.first_name + ' ' + this.userData.last_name);

    this.detailsSubject.next(new Map([['Prefix', this.userData.prefix],
    ['First Name', this.userData.first_name],
    ['Last Name', this.userData.last_name],
    ['Suffix', this.userData.suffix],
    ['Loyalty Member ID', this.userData.loyalty_member_id],
    ['Phone', this.userData.phone],
    ['Address', this.userData.address],
    ['Birthdate', this.userData.birthdate]]));

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    for (let sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }

}
