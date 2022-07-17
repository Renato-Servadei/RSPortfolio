import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  public educaciones: Educacion[] = [];
  public editEducacion: Educacion | undefined;
  public deleteEducacion: Educacion | undefined;
  roles : string[] = [];
  isAdmin = false;

  constructor(private eduService: EducacionService, private tokenService : TokenService) { }

  ngOnInit(): void {
    
    this.getEducaciones();
    this.tokenService.getAuthorities();
    this.tokenService.roles.forEach(rol => {
    if (rol === ("ROLE_ADMIN")) {
      this.isAdmin = true;
    }
  });
    }


    public getEducaciones():void {
      this.eduService.getEducacion().subscribe({
        next:(Response: Educacion[]) => {
          this.educaciones = Response;
        },

        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }

      })
    }
  
    

  public onOpenModal(mode: String, educacion?: Educacion):void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEducationModal')
      
    }
    else if (mode === 'delete') {
      this.deleteEducacion = educacion;
      button.setAttribute('data-target', '#deleteEducationModal')
    }
    
    else if (mode === 'edit') {
      this.editEducacion = educacion;
      button.setAttribute('data-target', '#editEducationModal')
    }
    container?.appendChild(button);
    button.click();
  }
  
    public onAddEducation(addForm : NgForm) {
      document.getElementById('add-educacion-form')?.click();
      this.eduService.addEducacion(addForm.value).subscribe({
        next: (response : Educacion) => {
          console.log(response);
          this.getEducaciones();
          addForm.reset();
        },
        error: (error : HttpErrorResponse) => {
        alert (error.message);
        addForm.reset();   
        }
      })
    }

    
    public onUpdateEducation(educacion : Educacion) {
      document.getElementById('add-educacion-form')?.click();
      this.eduService.updateEducacion(educacion).subscribe({
        next: (response : Educacion) => {
          console.log(response);
          this.getEducaciones();
          
        },
        error: (error : HttpErrorResponse) => {
          alert (error.message);
          
          }
      })
    }

    public onDeleteEducation(idEdu : number): void {

      this.eduService.deleteEducacion(idEdu).subscribe({
        next: (response : void) => {
          console.log(response);
          this.getEducaciones();
          
        },
        error: (error : HttpErrorResponse) => {
          alert (error.message );
          
          }
      })
    }
}


