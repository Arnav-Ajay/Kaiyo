import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnimeInter } from './anime-inter';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const url = 'assets/data/animeData.json';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAnime(): Observable<any> {
    return this.http.get<AnimeInter[]>(url).pipe(
      catchError(this.handleError<AnimeInter[]>('getAnime', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
  
  private log(message: string) {
    console.log(message);
  }
  
}
