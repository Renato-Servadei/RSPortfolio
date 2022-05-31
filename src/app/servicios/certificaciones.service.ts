import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Certificaciones } from '../model/certificaciones';

@Injectable({
  providedIn: 'root'
})
export class CertificacionesService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getCertificaciones():Observable<Certificaciones[]> {
    return this.http.get<Certificaciones[]>(`${this.apiServerUrl}/certificaciones`);
  }

  public addCertificaciones(Certificaciones: Certificaciones):Observable<Certificaciones> {
    return this.http.post<Certificaciones>(`${this.apiServerUrl}/certificaciones`, Certificaciones);
  }
  
  public updateCertificaciones(Certificaciones: Certificaciones):Observable<Certificaciones> {
    return this.http.put<Certificaciones>(`${this.apiServerUrl}/certificaciones`, Certificaciones);
  }

  public deleteCertificaciones(CertificacionesId: number):Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/certificaciones/${CertificacionesId}`);
  }


}
