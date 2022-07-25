import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs'
import { NuevoUsuario } from '../model/nuevoUsuario';
import { LoginUsuario } from '../model/login';
import { jwtDto } from '../model/jwtDto';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl="https://ap-portfolio-rs.herokuapp.com/auth/";
 

  constructor(private httpClient : HttpClient) {   }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authUrl + 'nuevo', nuevoUsuario)
  }

  public login(loginUsuario: LoginUsuario): Observable<jwtDto> {
    return this.httpClient.post<jwtDto>(this.authUrl + 'login', loginUsuario)
  }
}