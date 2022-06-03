import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Duras } from '../model/habilidades duras';

@Injectable({
  providedIn: 'root'
})

export class DurasService {
  private apiServerUrl = "https://rsportfolio-argprog.herokuapp.com/api"

  constructor(private http: HttpClient) { }

  public getDuras():Observable<Duras[]> {
    return this.http.get<Duras[]>(`${this.apiServerUrl}/duras`);
  }

  public addDuras(duras: Duras):Observable<Duras> {
    return this.http.post<Duras>(`${this.apiServerUrl}/duras`, duras);
  }
  
  public updateDuras(duras: Duras):Observable<Duras> {
    return this.http.put<Duras>(`${this.apiServerUrl}/duras`, duras);
  }

  public deleteDuras(durasId: number):Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/duras/${durasId}`);
  }


}
