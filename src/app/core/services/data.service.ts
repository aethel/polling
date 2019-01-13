import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { QuestionsUrl, HostUrl } from '../consts';
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

  postChoice(url: string): Observable<any> {
    return this.http.post(`${HostUrl}${url}`, null);
  }
  // postChoice(questionId: number, choiceId: number): Observable<any> {
  //   return this.http.post(`${QuestionsUrl}/${questionId}/choices/${choiceId}`);
  // }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
