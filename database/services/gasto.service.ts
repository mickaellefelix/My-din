import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGasto } from '../models/gasto.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GastoService {
  private apiUrl = 'http://localhost:3000/gastos';

  constructor(private http: HttpClient) {}

  cadastrarGasto(gasto: IGasto): Observable<IGasto> {
    return this.http.post<IGasto>(this.apiUrl, gasto);
  }

  getGastos(): Observable<IGasto[]> {
    return this.http.get<IGasto[]>(this.apiUrl);
  }
}
