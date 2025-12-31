import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = 'http://localhost:5000/api/treatments';
  private homeUrl ='http://localhost:5000/api/home'

  constructor(private http: HttpClient) {}

  getServices(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getHome(): Observable<any> {
    return this.http.get(this.homeUrl);
  }
}
