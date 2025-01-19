import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientHomepageService {
  private baseUrl: string = 'http://localhost:8080/api/client';

  private httpClient: HttpClient = inject(HttpClient);

  constructor() { }

  getClinicsAndProfessionals(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: token
    });
    return this.httpClient.get(`${this.baseUrl}/clinics-and-professionals`, { headers });
  }
}
