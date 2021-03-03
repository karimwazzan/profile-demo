import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@interfaces/User';
import { ApiService } from '@services/api.service';
import { TitleService } from '@services/title.service';
import { UserService } from '@services/user.service';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['photo', 'localid', 'email', 'first_name', 'last_name', 'phone', 'address', 'modified', 'view'];
  dataSource = new MatTableDataSource<User>();
  subscriptions = new Array<Subscription>();
  isLoading = true;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private titleService: TitleService
  ) {
    this.titleService.setTitle('Profiles');
    console.log('list const');
  }

  ngOnInit(): void {
    console.log('list init');
  }

  getUsers(): void {
    this.isLoading = true;
    this.subscriptions.push(
      this.userService.getUsers().pipe(
        delay(0)
      )
        .subscribe(users => {
          this.dataSource.data = users;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.isLoading = false
        }));
  }

  ngAfterViewInit() {
    this.getUsers();

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToProfile(user: User) {
    console.log('go to profile', user);
    this.router.navigate([user.localid], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    for (let sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }

}
