import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../models/usuario.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(this.url);
  }

  getUsuarioPorEmail(email: string): Observable<IUsuario | undefined> {
    return this.http.get<IUsuario[]>(`${this.url}?email=${email}`).pipe(
      map(usuarios => usuarios[0]) // retorna o primeiro usuário encontrado com o e-mail
    );
  }
  
  cadastrarUsuario(usuario: IUsuario): Observable<IUsuario> {
    return this.http.post<IUsuario>(this.url, usuario);
  }

  validarLogin(email: string, senha: string): Observable<IUsuario | undefined> {
    return this.getUsuarios().pipe(
      map(usuarios => usuarios.find(u => u.email === email && u.senha === senha))
    );
  }
}
