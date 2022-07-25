import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
private apiServerUrl = "https://ap-portfolio-rs.herokuapp.com";
//private apiServerUrl = "http://localhost:8080"
  

  constructor(private http: HttpClient) { }

  public getEducacion():Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${this.apiServerUrl}/educacion/ver`);
  }

  public addEducacion(educacion: Educacion):Observable<Educacion> {
    return this.http.post<Educacion>(`${this.apiServerUrl}/educacion/crear`, educacion);
  }
  
  public updateEducacion(educacion: Educacion):Observable<Educacion> {
    return this.http.put<Educacion>(`${this.apiServerUrl}/educacion/editar`, educacion);
  }

  public deleteEducacion(educacionId: number):Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/educacion/borrar/${educacionId}`);
  }


}
