import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login';
import { TokenService } from 'src/app/servicios/token.service';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  isLogged = false;
  isLoginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] =[];
  errMsj!: string;
  

    constructor (
      private tokenService: TokenService,
      private authService: AuthService,
      private router: Router
    ) {}

    ngOnInit() {
      if (this.tokenService.getToken()) {
        this.isLogged = true;
        this.isLoginFail = false;
        this.roles = this.tokenService.getAuthorities();
      }
    }

    onLogin(): void {
      this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
      this.authService.login(this.loginUsuario).subscribe(
        data => {
          this.isLogged = true;
          this.isLoginFail = false;
          this.tokenService.setToken(data.token);
          this.tokenService.setUserName(data.nombreUsuario);
          this.tokenService.setAuthorities(data.authorities);
          this.roles = data.authorities;
          this.router.navigate(['/banner']);
        },
        err => {
          this.isLogged = false;
          this.isLoginFail = true;
          this.errMsj = err.error.message;
          
        }
      )
    }
  }


//   
//   constructor(private formBuilder : FormBuilder, private autenticacion: AutenticacionService, private ruta: Router) { 
//       this.form = this.formBuilder.group( {
//         email : ['', [Validators.required, Validators.email]],
//         password : ['', [Validators.required, Validators.minLength(8)]],
//         // deviceInfo : this.formBuilder.group({
//         //   deviceId : ['17867868768'],
//         //   deviceType : ['Android'],
//         //   notificationToken : ['67657575eececc34']
//         // }) 
//       })
// } 
// metodos para tomar los datos del formulario
  // ngOnInit(): void {
  // }

  // get Email() {
  //   return this.form.get('email');
  // }

  
  // get Password() {
  //   return this.form.get('password');
  // }

  // onEnviar(event: Event) {

  //   event.preventDefault;
  //   this.autenticacion.IniciarSesion(this.form.value).subscribe(data => {
  //     console.log("DATA:" + JSON.stringify(data));
  //     this.ruta.navigate(['/portfolio'])
  //   })
  // }