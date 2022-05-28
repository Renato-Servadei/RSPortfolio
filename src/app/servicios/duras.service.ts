import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Duras } from '../model/habilidades duras';

@Injectable({
  providedIn: 'root'
})

export class DurasService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getDuras():Observable<Duras[]> {
    return this.http.get<Duras[]>(`${this.apiServerUrl}/duras/ver`);
  }

  public addDuras(Duras: Duras):Observable<Duras> {
    return this.http.post<Duras>(`${this.apiServerUrl}/duras/crear`, Duras);
  }
  
  public updateDuras(Duras: Duras):Observable<Duras> {
    return this.http.post<Duras>(`${this.apiServerUrl}/duras/editar`, Duras);
  }

  public deleteDuras(DurasId: number):Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/duras/borrar/${DurasId}`);
  }


}
