import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ICatData } from 'src/app/model/catdata';
import { take, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CatApiService {
  constructor(private http: HttpClient) {}

  getNewCatData(): Observable<ICatData[]> {
    return this.http.get<ICatData[]>(
      'https://api.thecatapi.com/v1/images/search'
    );
  }
}
