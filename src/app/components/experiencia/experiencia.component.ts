import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/servicios/portfolio-data.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  
  myPortfolio: any;
  myExperienciaList: any;
  constructor(private portfolioData : PortfolioDataService) { }

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data =>{
      this.myExperienciaList = data.Experiencia
    })
  }


}
