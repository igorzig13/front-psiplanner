import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL: string = 'http://localhost:8080/api/auth/login';
  httpClient: HttpClient = inject(HttpClient);

  constructor() { }

  login(login: any): Observable<any> {
    return this.httpClient.post<any>(this.apiURL, login);
  }
}
