import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { ReactiveFormsModule, NgForm, FormsModule} from '@angular/forms'
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  
  public proyectos: Proyectos[] = [];
  public editProyectos: Proyectos | undefined;
  public deleteProyectos: Proyectos | undefined;
  roles : string[] = [];
  isAdmin = false;
  
  constructor(private proService: ProyectosService, private tokenService : TokenService) { }

  ngOnInit(): void {
    
    this.getProyectos();
    this.tokenService.getAuthorities();
    this.tokenService.roles.forEach(rol => {
    if (rol === ("ROLE_ADMIN")) {
      this.isAdmin = true;
    }
  });
  
    }


    public getProyectos():void {
      this.proService.getProyectos().subscribe({
        next:(Response: Proyectos[]) => {
          this.proyectos = Response;
        },

        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }

      })
    }

    
    public onOpenModal(mode: String, proyectos?: Proyectos):void {
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'add') {
        button.setAttribute('data-target', '#addProyectosModal')
        
      }
      else if (mode === 'delete') {
        this.deleteProyectos = proyectos;
        button.setAttribute('data-target', '#deleteProyectosModal')
      }
      
      else if (mode === 'edit') {
        this.editProyectos = proyectos;
        button.setAttribute('data-target', '#editProyectosModal')
      }
      container?.appendChild(button);
      button.click();
    }
    
      public onAddProyectos(addForm : NgForm) {
        document.getElementById('add-proyectos-form')?.click();
        this.proService.addProyectos(addForm.value).subscribe({
          next: (response : Proyectos) => {
            console.log(response);
            this.getProyectos();
            addForm.reset();
          },
          error: (error : HttpErrorResponse) => {
          alert (error.message);
          addForm.reset();   
          }
        })
      }
  
      
      public onUpdateProyectos(proyectos : Proyectos) {
        document.getElementById('add-proyectos-form')?.click();
        this.proService.updateProyectos(proyectos).subscribe({
          next: (response : Proyectos) => {
            console.log(response);
            this.getProyectos();
            
          },
          error: (error : HttpErrorResponse) => {
            alert (error.message);
            
            }
        })
      }
  
      public onDeleteProyectos(idExp : number): void {
  
        this.proService.deleteProyectos(idExp).subscribe({
          next: (response : void) => {
            console.log(response);
            this.getProyectos();
            
          },
          error: (error : HttpErrorResponse) => {
            alert (error.message );
            
            }
        })
      }
  }



