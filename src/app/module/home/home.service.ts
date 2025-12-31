import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = 'https://mallerdentalbackend.onrender.com/api/treatments';
  private homeUrl ='https://mallerdentalbackend.onrender.com/api/home'

  constructor(private http: HttpClient) {}

  getServices(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getHome(): Observable<any> {
    return this.http.get(this.homeUrl);
  }
}
