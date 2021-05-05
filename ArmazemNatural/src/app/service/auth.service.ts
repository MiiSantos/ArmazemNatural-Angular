import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userLogin } from '../model/userLogin';
import { usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: userLogin): Observable<userLogin> {
    return this.http.post<userLogin>('http://localhost:8080/usuario/logar', userLogin)
  }

  cadastrar(usuario: usuario): Observable<usuario>{
    return this.http.post<usuario>('http://localhost:8080/usuario/cadastrar', usuario)
  }
}
