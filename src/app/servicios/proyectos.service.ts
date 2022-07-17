import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
//private apiServerUrl = "https://rsportfolio-argprog.herokuapp.com";
private apiServerUrl = "http://localhost:8080"
  

  constructor(private http: HttpClient) { }

  public getProyectos():Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(`${this.apiServerUrl}/proyectos/ver`);
  }

  public addProyectos(proyectos: Proyectos):Observable<Proyectos> {
    return this.http.post<Proyectos>(`${this.apiServerUrl}/proyectos/crear`, proyectos);
  }
  
  public updateProyectos(proyectos: Proyectos):Observable<Proyectos> {
    return this.http.put<Proyectos>(`${this.apiServerUrl}/proyectos/editar`, proyectos);
  }

  public deleteProyectos(proyectosId: number):Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/proyectos/borrar/${proyectosId}`);
  }


}

