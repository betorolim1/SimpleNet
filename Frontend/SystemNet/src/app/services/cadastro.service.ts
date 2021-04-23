import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  baseUrl = `${environment.baseUrl}/api/v1/register`;

  constructor(private http: HttpClient) {}

  Save(plots: number, value: number): Observable<any> {
    return this.http.post(this.baseUrl, { plots, value });
  }
}
