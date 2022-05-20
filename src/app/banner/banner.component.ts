import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  myPortfolio: any;

  constructor(private portfolioData: PortfolioDataService) { }

  ngOnInit(): void {
    
    this.portfolioData.getData().subscribe(data =>{
      this.myPortfolio = data;
      console.log(data)
    });
  }

}
