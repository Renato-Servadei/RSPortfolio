import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blandas } from '../model/habilidades blandas';

@Injectable({
  providedIn: 'root'
})
export class BlandasService {

  //private apiServerUrl = "https://rsportfolio-argprog.herokuapp.com";
  private apiServerUrl = "http://localhost:8080"
  
  constructor(private http: HttpClient) { }

  public getBlandas():Observable<Blandas[]> {
    return this.http.get<Blandas[]>(`${this.apiServerUrl}/blandas/ver`);
  }

  public addBlandas(blandas: Blandas):Observable<Blandas> {
    return this.http.post<Blandas>(`${this.apiServerUrl}/blandas/crear`, blandas);
  }
  
  public updateBlandas(blandas: Blandas):Observable<Blandas> {
    return this.http.put<Blandas>(`${this.apiServerUrl}/blandas/editar`, blandas);
  }

  public deleteBlandas(blandasId: number):Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/blandas/borrar/${blandasId}`);
  }


}
