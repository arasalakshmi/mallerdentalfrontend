import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderFooterService {

  private apiUrl = 'https://mallerdentalbackend.onrender.com/api/header-footer';

  constructor(private http: HttpClient) {}

  getHeaderFooter(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
