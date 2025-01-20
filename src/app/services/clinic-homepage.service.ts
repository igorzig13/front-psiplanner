import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinicHomepageService {
  baseUrl: string = 'http://localhost:8080/api/clinic/professionals';

  httpClient: HttpClient = inject(HttpClient);

  constructor() { }
}
