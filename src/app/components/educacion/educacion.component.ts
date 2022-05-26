import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/servicios/portfolio-data.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  myPortfolio: any;
  myEducationList: any;
  constructor(private portfolioData: PortfolioDataService) { }

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data =>{
      this.myEducationList = data.Educacion
    })
  
  }

  // public onOpenModal(mode: String, education?: String) {
  //   const container = document.getElementById('main-container');
  //   const button = document.createElement('button');
  //   button.style.display = 'none';
  //   button.setAttribute('data-toggle', 'modal');
  //   if (mode === 'add') {
  //     button.setAttribute('data-target', '#addEducationModal')
  //     return "hola"
  //   }
  //   else if (mode === 'delete') {
  //     return 'hola'
  //   }

    
  }


