import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '@interfaces/User';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.PROFILE_API_ENDPOINT).pipe(
      catchError(this.handleError<User[]>('getUsers', []))
    );
    ;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

}

