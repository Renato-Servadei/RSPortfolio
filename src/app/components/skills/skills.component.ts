import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Duras } from 'src/app/model/habilidades duras';
import { DurasService } from 'src/app/servicios/duras.service';
import { ReactiveFormsModule, NgForm, FormsModule} from '@angular/forms'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
    
  public duras: Duras[] = [];
  public editDuras: Duras | undefined;
  public deleteDuras: Duras | undefined;

  
  constructor(private durasService: DurasService) { }

  ngOnInit(): void {
    
    this.getDuras();
    
  
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
    
    public onOpenModal(mode: String, duras?: Duras):void {
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'add') {
        button.setAttribute('data-target', '#addDurasModal')
        
      }
      else if (mode === 'delete') {
        this.deleteDuras = duras;
        button.setAttribute('data-target', '#deleteDurasModal')
      }
      
      else if (mode === 'edit') {
        this.editDuras = duras;
        button.setAttribute('data-target', '#editDurasModal')
      }
      container?.appendChild(button);
      button.click();
    }
    
      public onAddDuras(addForm : NgForm) {
        document.getElementById('add-duras-form')?.click();
        this.durasService.addDuras(addForm.value).subscribe({
          next: (response : Duras) => {
            console.log(response);
            this.getDuras();
            addForm.reset();
          },
          error: (error : HttpErrorResponse) => {
          alert (error.message);
          addForm.reset();   
          }
        })
      }
  
      
      public onUpdateDuras(duras : Duras) {
        document.getElementById('add-duras-form')?.click();
        this.durasService.updateDuras(duras).subscribe({
          next: (response : Duras) => {
            console.log(response);
            this.getDuras();
            
          },
          error: (error : HttpErrorResponse) => {
            alert (error.message);
            
            }
        })
      }
  
      public onDeleteDuras(idDuras : number): void {
  
        this.durasService.deleteDuras(idDuras).subscribe({
          next: (response : void) => {
            console.log(response);
            this.getDuras();
            
          },
          error: (error : HttpErrorResponse) => {
            alert (error.message );
            
            }
        })
      }

        }






