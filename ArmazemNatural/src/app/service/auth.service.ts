import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { userLogin } from '../model/UserLogin';
import { usuario } from '../model/Usuario';

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

  logado() {
    let ok = false

    if(environment.token != ''){
      ok = true
    }
    return ok
  }
}
