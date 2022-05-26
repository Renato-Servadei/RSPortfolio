import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/servicios/portfolio-data.service';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.css']
})
export class CertificacionesComponent implements OnInit {
  myPortfolio: any;
  myCertificacionesList: any;
  constructor(private portfolioData : PortfolioDataService) { }

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data =>{
      this.myCertificacionesList = data.Certificaciones
    })
  }


}
