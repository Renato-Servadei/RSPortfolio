import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
public persona : Persona | undefined;
public editPersona : Persona | undefined;
roles! : string[];
isAdmin! : boolean;
  
  constructor(private personaService : PersonaService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getPersona();
    this.tokenService.getAuthorities();
    this.tokenService.roles.forEach(rol => {
    if (rol === ("ROLE_ADMIN")) {
      this.isAdmin = true;
      
    }
  });   
  }

  public getPersona() {
    this.personaService.getPersona(1).subscribe({
      next:(response : Persona)=>{
        this.persona = response;
      },
      error: (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    })
  }
  public onUpdatePersona(persona: Persona) {
    document.getElementById('edit-persona-form')?.click();
    this.personaService.updatePersona(persona).subscribe({
      next: (response : Persona) => {
        console.log(response);
        this.getPersona();
        
      },
      error: (error : HttpErrorResponse) => {
        alert (error.message);
        
        }
    })
  }

  public onOpenModal(mode: String, persona?: Persona):void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      
      this.editPersona = persona;
      button.setAttribute('data-target', '#editPersonaModal')
    }
    console.log("holaquetal")
    container?.appendChild(button);
    button.click();
  }

}
