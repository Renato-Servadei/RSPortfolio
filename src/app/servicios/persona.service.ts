import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
//private apiServerUrl = "https://rsportfolio-argprog.herokuapp.com";
private apiServerUrl = "http://localhost:8080"
  

  constructor(private http: HttpClient) { }

  public getPersona(idPer: number):Observable<Persona> {
    return this.http.get<Persona>(`${this.apiServerUrl}/persona/${idPer}`);
    
  }

  
  public updatePersona(persona : Persona):Observable<Persona> {
    return this.http.put<Persona>(`${this.apiServerUrl}/persona`, persona);
  }
}
