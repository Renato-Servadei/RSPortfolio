import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Blandas } from 'src/app/model/habilidades blandas';
import { Duras } from 'src/app/model/habilidades duras';
import { BlandasService } from 'src/app/servicios/blandas.service';
import { DurasService } from 'src/app/servicios/duras.service';
import { PortfolioDataService } from '../../servicios/portfolio-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
    
  public duras: Duras[] = [];
  public editDuras: Duras | undefined;
  public deleteDuras: Duras | undefined;

  
  public blandas: Blandas[] = [];
  public editBlandas: Blandas | undefined;
  public deleteBlandas: Blandas | undefined;

  constructor(private durasService: DurasService, private blandasService: BlandasService) { }

  ngOnInit(): void {
    
    this.getDuras();
    this.getBlandas();
  
    }


    public getDuras():void {
      this.durasService.getDuras().subscribe({
        next:(Response: Duras[]) => {
          this.duras = Response;
        },

        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }

      })
    }

    
    public getBlandas():void {
      this.blandasService.getBlandas().subscribe({
        next:(Response: Blandas[]) => {
          this.blandas = Response;
        },

        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }

      })
    }
  }



