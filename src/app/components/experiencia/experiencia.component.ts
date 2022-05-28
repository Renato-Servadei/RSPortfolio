import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { PortfolioDataService } from 'src/app/servicios/portfolio-data.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  
  public experiencias: Experiencia[] = [];
  public editExperiencia: Experiencia | undefined;
  public deleteExperiencia: Experiencia | undefined;

  constructor(private expService: ExperienciaService) { }

  ngOnInit(): void {
    
    this.getExperiencias();
  
    }


    public getExperiencias():void {
      this.expService.getExperiencia().subscribe({
        next:(Response: Experiencia[]) => {
          this.experiencias = Response;
        },

        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }

      })
    }
  }



