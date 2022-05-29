import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Certificaciones } from 'src/app/model/certificaciones';
import { CertificacionesService } from 'src/app/servicios/certificaciones.service';
import { PortfolioDataService } from 'src/app/servicios/portfolio-data.service';
import { ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms'

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.css']
})
export class CertificacionesComponent implements OnInit {
  
  public certificaciones: Certificaciones[] = [];
  public editCertificaciones: Certificaciones | undefined;
  public deleteCertificaciones: Certificaciones | undefined;

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
  
    public onOpenModal(mode: String, certificaciones?: Certificaciones):void {
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'add') {
        button.setAttribute('data-target', '#addCertificacionesModal')
        
      }
      else if (mode === 'delete') {
        this.deleteCertificaciones = certificaciones;
        button.setAttribute('data-target', '#deleteCertificacionesModal')
      }
      
      else if (mode === 'edit') {
        this.editCertificaciones = certificaciones;
        button.setAttribute('data-target', '#editCertificacionesModal')
      }
      container?.appendChild(button);
      button.click();
    }
    
      public onAddCertificaciones(addForm : NgForm) {
        document.getElementById('add-certificaciones-form')?.click();
        this.certService.addCertificaciones(addForm.value).subscribe({
          next: (response : Certificaciones) => {
            console.log(response);
            this.getCertificaciones();
            addForm.reset();
          },
          error: (error : HttpErrorResponse) => {
          alert (error.message);
          addForm.reset();   
          }
        })
      }
  
      
      public onUpdateCertificaciones(certificaciones : Certificaciones) {
        document.getElementById('add-certificaciones-form')?.click();
        this.certService.updateCertificaciones(certificaciones).subscribe({
          next: (response : Certificaciones) => {
            console.log(response);
            this.getCertificaciones();
            
          },
          error: (error : HttpErrorResponse) => {
            alert (error.message);
            
            }
        })
      }
  
      public onDeleteCertificaciones(idExp : number): void {
  
        this.certService.deleteCertificaciones(idExp).subscribe({
          next: (response : void) => {
            console.log(response);
            this.getCertificaciones();
            
          },
          error: (error : HttpErrorResponse) => {
            alert (error.message );
            
            }
        })
      }
  }



