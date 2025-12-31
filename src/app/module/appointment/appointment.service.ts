import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderFooterService {

  private apiUrl = 'http://localhost:5000/api/appointments';

  constructor(private http: HttpClient) {}

  getHeaderFooter(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
