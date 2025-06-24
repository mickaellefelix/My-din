import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGanho } from '../models/ganho.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GanhoService {
  private apiUrl = 'http://localhost:3000/ganhos';

  constructor(private http: HttpClient) {}

  cadastrarGanho(ganho: IGanho): Observable<IGanho> {
    return this.http.post<IGanho>(this.apiUrl, ganho);
  }

  getGanhos(): Observable<IGanho[]> {
  return this.http.get<IGanho[]>(this.apiUrl);
  }
}
