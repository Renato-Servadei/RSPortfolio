import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Duras } from '../model/habilidades duras';

@Injectable({
  providedIn: 'root'
})

export class DurasService {
//private apiServerUrl = "https://rsportfolio-argprog.herokuapp.com";
private apiServerUrl = "http://localhost:8080"
  
  constructor(private http: HttpClient) { }

  public getDuras():Observable<Duras[]> {
    return this.http.get<Duras[]>(`${this.apiServerUrl}/duras/ver`);
  }

  public addDuras(duras: Duras):Observable<Duras> {
    return this.http.post<Duras>(`${this.apiServerUrl}/duras/crear`, duras);
  }
  
  public updateDuras(duras: Duras):Observable<Duras> {
    return this.http.put<Duras>(`${this.apiServerUrl}/duras/editar`, duras);
  }

  public deleteDuras(durasId: number):Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/duras/borrar/${durasId}`);
  }


}
