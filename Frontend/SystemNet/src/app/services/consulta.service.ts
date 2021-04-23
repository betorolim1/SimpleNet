import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConsultaService {
  baseUrl = `${environment.baseUrl}/api/v1/query`;

  httpOptionsPlain = {
    headers: new HttpHeaders({
      Accept: 'text/plain',
      'Content-Type': 'text/plain',
    }),
    responseType: 'text' as 'json',
  };

  constructor(private http: HttpClient) {}

  Get(number: number): Observable<string> {
    return this.http.get<string>(
      `${this.baseUrl}/${number.toString()}`,
      this.httpOptionsPlain
    );
  }
}
