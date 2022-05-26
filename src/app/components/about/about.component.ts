import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from '../../servicios/portfolio-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  myPortfolio: any;
  myExperienceList: any;


  constructor(private portfolioData: PortfolioDataService) { }

  ngOnInit(): void {
     this.portfolioData.getData().subscribe(data =>{
       this.myPortfolio = data;
     });
     this.portfolioData.getData().subscribe(data =>{
       this.myExperienceList = data.Experiencia
     })
     

  }

}
