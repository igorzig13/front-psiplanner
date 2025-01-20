import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
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

  getProfessionals(token: string, clinicId: any): Observable<any> {
    const headers = new HttpHeaders({ Authorization: token })
    const params = new HttpParams().set('clinicId', clinicId);
    return this.httpClient.get(`${this.baseUrl}/clinic/professionals`, { headers, params });
  }
}
