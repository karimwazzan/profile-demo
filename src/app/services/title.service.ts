import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private title = new BehaviorSubject<string>('Profiles');

  constructor() { }

  setTitle(title: string) {
    this.title.next(title);
    return this.title;
  }

  getTitle(): Observable<string> {
    return this.title;
  }
}
