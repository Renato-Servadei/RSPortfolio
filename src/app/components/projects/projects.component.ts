import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  
  public proyectos: Proyectos[] = [];
  public editProyectos: Proyectos | undefined;
  public deleteProyectos: Proyectos | undefined;

  constructor(private proService: ProyectosService) { }

  ngOnInit(): void {
    
    this.getProyectos();
  
    }


    public getProyectos():void {
      this.proService.getProyectos().subscribe({
        next:(Response: Proyectos[]) => {
          this.proyectos = Response;
          console.log(this.proyectos)
        },

        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }

      })
    }
  }



