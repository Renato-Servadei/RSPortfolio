import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiServerUrl = "https://ap-portfolio-rs.herokuapp.com";
  // private apiServerUrl = "http://localhost:8080"
  

  constructor(private http: HttpClient) { }

  public getExperiencia():Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.apiServerUrl}/experiencia/ver`);
  }

  public addExperiencia(experiencia: Experiencia):Observable<Experiencia> {
    return this.http.post<Experiencia>(`${this.apiServerUrl}/experiencia/crear`, experiencia);
  }
  
  public updateExperiencia(experiencia: Experiencia):Observable<Experiencia> {
    return this.http.put<Experiencia>(`${this.apiServerUrl}/experiencia/editar`, experiencia);
  }

  public deleteExperiencia(experienciaId: number):Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/experiencia/borrar/${experienciaId}`);
  }


}

