import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Certificaciones } from '../model/certificaciones';

@Injectable({
  providedIn: 'root'
})
export class CertificacionesService {
  private apiServerUrl = "https://rsportfolio-argprog.herokuapp.com"

  constructor(private http: HttpClient) { }

  public getCertificaciones():Observable<Certificaciones[]> {
    return this.http.get<Certificaciones[]>(`${this.apiServerUrl}/api/certificaciones`);
  }

  public addCertificaciones(Certificaciones: Certificaciones):Observable<Certificaciones> {
    return this.http.post<Certificaciones>(`${this.apiServerUrl}/api/certificaciones`, Certificaciones);
  }
  
  public updateCertificaciones(Certificaciones: Certificaciones):Observable<Certificaciones> {
    return this.http.put<Certificaciones>(`${this.apiServerUrl}/api/certificaciones`, Certificaciones);
  }

  public deleteCertificaciones(CertificacionesId: number):Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/certificaciones/${CertificacionesId}`);
  }


}
