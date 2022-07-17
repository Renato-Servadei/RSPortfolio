
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Blandas } from 'src/app/model/habilidades blandas';
import { BlandasService } from 'src/app/servicios/blandas.service';
import { ReactiveFormsModule, NgForm, FormsModule} from '@angular/forms'
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-blandas',
  templateUrl: './blandas.component.html',
  styleUrls: ['./blandas.component.css']
})
export class BlandasComponent implements OnInit {
  
  public blandas: Blandas[] = [];
  public editBlandas: Blandas | undefined;
  public deleteBlandas: Blandas | undefined;
  roles : string[] = [];
  isAdmin = false;
  

  constructor(private blandasService: BlandasService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.tokenService.getAuthorities();
    this.getBlandas();
    this.tokenService.roles.forEach(rol => {
    if (rol === ("ROLE_ADMIN")) {
      this.isAdmin = true;
    }
  });

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
    
    public onOpenModal(mode: String, blandas?: Blandas):void {
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'add') {
        button.setAttribute('data-target', '#addBlandasModal')
        
      }
      else if (mode === 'delete') {
        this.deleteBlandas = blandas;
        button.setAttribute('data-target', '#deleteBlandasModal')
      }
      
      else if (mode === 'edit') {
        this.editBlandas = blandas;
        button.setAttribute('data-target', '#editBlandasModal')
      }
      container?.appendChild(button);
      button.click();
    }
    
      public onAddBlandas(addForm : NgForm) {
        document.getElementById('add-blandas-form')?.click();
        this.blandasService.addBlandas(addForm.value).subscribe({
          next: (response : Blandas) => {
            console.log(response);
            this.getBlandas();
            addForm.reset();
          },
          error: (error : HttpErrorResponse) => {
          alert (error.message);
          addForm.reset();   
          }
        })
      }
  
      
      public onUpdateBlandas(blandas : Blandas) {
        document.getElementById('add-blandas-form')?.click();
        this.blandasService.updateBlandas(blandas).subscribe({
          next: (response : Blandas) => {
            console.log(response);
            this.getBlandas();
            
          },
          error: (error : HttpErrorResponse) => {
            alert (error.message);
            
            }
        })
      }
  
      public onDeleteBlandas(idBlandas : number): void {
  
        this.blandasService.deleteBlandas(idBlandas).subscribe({
          next: (response : void) => {
            console.log(response);
            this.getBlandas();
            
          },
          error: (error : HttpErrorResponse) => {
            alert (error.message );
            
            }
        })
      }

        }






