import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinicProfessionalsService {
  baseUrl: string = "http://localhost:8080/api/clinic/professionals";
  httpClient: HttpClient = inject(HttpClient);

  constructor() { }

  getAvailableProfessionals(token: string): Observable<any> {
    const headers = new HttpHeaders({ Authorization: token });
    return this.httpClient.get(`${this.baseUrl}/available/`, { headers });
  }

  addProfessional(token: string, clinicId: any, professionalId: any): Observable<any> {
    const params = new HttpParams().set('clinicId', clinicId)
                                              .set('professionalId', professionalId);
    const headers = new HttpHeaders({ Authorization: token });
    return this.httpClient.post(`${this.baseUrl}/add`, null, { headers, params,  responseType: 'text'  } );
  }

  getProfessionals(token: string, clinicId: string): Observable<any> {
    const params: HttpParams = new HttpParams().set('clinicId', clinicId);
    const headers = new HttpHeaders({Authorization: token})
    return this.httpClient.get(`${this.baseUrl}/list`, {headers, params});
  }
}
