import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getPersona():Observable<Persona> {
    return this.http.get<Persona>(`${this.apiServerUrl}/persona/ver/1`);
  }

  
  public updatePersona(persona : Persona):Observable<Persona> {
    return this.http.put<Persona>(`${this.apiServerUrl}/persona/editar`, persona);
  }
}
