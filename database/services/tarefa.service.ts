import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ITarefa {
  id?: number;
  nome: string;
  prioridade: string;
  dataLimite: string;
  categoria: string;
}

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private apiUrl = 'http://localhost:3000/tarefas';

  constructor(private http: HttpClient) {}

  getTarefas(): Observable<ITarefa[]> {
    return this.http.get<ITarefa[]>(this.apiUrl);
  }

  adicionarTarefa(tarefa: ITarefa): Observable<ITarefa> {
    return this.http.post<ITarefa>(this.apiUrl, tarefa);
  }

  atualizarTarefa(tarefa: ITarefa): Observable<ITarefa> {
    return this.http.put<ITarefa>(`${this.apiUrl}/${tarefa.id}`, tarefa);
  }

  deletarTarefa(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
