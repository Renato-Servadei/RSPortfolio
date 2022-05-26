import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from '../../servicios/portfolio-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  myPortfolio: any;
  myHardSkillsList: any;
  mySoftSkillsList: any;

  constructor(private portfolioData: PortfolioDataService) { }

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data =>{
      this.myHardSkillsList = data.Hard
      
    })

    this.portfolioData.getData().subscribe(data =>{
      this.mySoftSkillsList = data.Soft
    })

}
}
