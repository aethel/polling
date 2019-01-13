import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { QuestionsUrl } from '../consts';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}
  getData(url: string = QuestionsUrl): Observable<any> {
    return this.http.get(url);
  }
}
