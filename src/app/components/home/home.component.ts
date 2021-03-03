import { Component, OnDestroy, OnInit } from '@angular/core';
import { TitleService } from '@services/title.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  title!: string;
  subscriptions = new Array<Subscription>();

  constructor(private titleService: TitleService) {
    this.subscriptions.push(this.titleService.getTitle().subscribe(title => this.title = title));
  }

  ngOnDestroy(): void {
    for (let sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }

  ngOnInit(): void {
  }

}
