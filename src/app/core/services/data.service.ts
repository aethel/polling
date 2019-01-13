import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { QuestionsUrl } from '../consts';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(url: string = QuestionsUrl): Observable<any> {
    return this.http.get(url).pipe(catchError(this.handleError));
  }
  getDataDetails(id: number): Observable<any> {
    return this.http.get(`${QuestionsUrl}/${id}`);
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
