import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = 'http://localhost:8080/api/user/register';

  httpClient: HttpClient = inject(HttpClient);

  constructor() { }

  registerProfessional(data: any): Observable<string> {
    return this.httpClient.post<string>(`${this.baseUrl}/professional`, data, { responseType: 'text' as 'json' });
  }

  registerClient(data: any): Observable<string> {
    return this.httpClient.post<string>(`${this.baseUrl}/client`, data, { responseType: 'text' as 'json' });
  }

  registerClinic(data: any): Observable<string> {
    return this.httpClient.post<string>(`${this.baseUrl}/clinic`, data, { responseType: 'text' as 'json' });
  }
}
