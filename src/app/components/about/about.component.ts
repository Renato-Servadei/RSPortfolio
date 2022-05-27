import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
public persona : Persona | undefined;
public editPersona : Persona | undefined;

  constructor(private personaService : PersonaService) { }

  ngOnInit(): void {
    this.getPersona();
     
  }

  public getPersona() {
    this.personaService.getPersona().subscribe({
      next:(response : Persona)=>{
        this.persona = response;
      },
      error: (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    })
  }
  

}
