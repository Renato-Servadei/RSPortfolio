import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Certificaciones } from 'src/app/model/certificaciones';
import { CertificacionesService } from 'src/app/servicios/certificaciones.service';
import { PortfolioDataService } from 'src/app/servicios/portfolio-data.service';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.css']
})
export class CertificacionesComponent implements OnInit {
  
  public certificaciones: Certificaciones[] = [];
  public editCertificacion: Certificaciones | undefined;
  public deleteCertificacion: Certificaciones | undefined;

  constructor(private certService: CertificacionesService) { }

  ngOnInit(): void {
    
    this.getCertificaciones();
  
    }


    public getCertificaciones():void {
      this.certService.getCertificaciones().subscribe({
        next:(Response: Certificaciones[]) => {
          this.certificaciones = Response;
        },

        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }

      })
    }
  


}
