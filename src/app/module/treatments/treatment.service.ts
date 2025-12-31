import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {

  private apiUrl = 'http://localhost:5000/api/treatments';

  constructor(private http: HttpClient) {}

  getServices(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
