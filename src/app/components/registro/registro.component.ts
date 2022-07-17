import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/model/nuevoUsuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  isRegister = false;
  isRegisterFail = false;
  nuevoUsuario!: NuevoUsuario;
  nombre!: string;
  nombreUsuario!: string;
  email!: string;
  password!: string;
  isLogged = false;
  errMsj!: string;
  

    constructor (
      private tokenService: TokenService,
      private authService: AuthService,
      private router: Router
    ) {}

    ngOnInit() {
      if (this.tokenService.getToken()) {
        this.isLogged = true;
      }
    }

    onRegister(): void {
      this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
      this.authService.nuevo(this.nuevoUsuario).subscribe(
        data => {
          this.isRegister = true;
          this.isRegisterFail = false;
          this.router.navigate(['/login']);
        },
        err => {
          this.isRegister = false;
          this.isRegisterFail = true;
          this.errMsj = err.error.mensaje;
          
        }
      )
    }
  }
