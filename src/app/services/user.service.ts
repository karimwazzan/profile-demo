import { Injectable } from '@angular/core';
import { User } from '@interfaces/User';
import { ApiService } from '@services/api.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = new BehaviorSubject<User[]>([]);


  constructor(private apiService: ApiService) {

    this.loadUsers();

  }

  loadUsers() {
    console.log('should load users');

    this.apiService.getUsers().subscribe(users => {
      this.users.next(users);
      console.log('finished load users');

    });
  }

  getUsers(): Observable<User[]> {

    return this.users;
  }

  getUser(id: string): Observable<User | undefined> {

    return this.users.pipe(
      map(users => users.find(user => (user.localid + '') == id))
    );

  }
}
