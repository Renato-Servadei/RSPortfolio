import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { CertificacionesComponent } from './components/certificaciones/certificaciones.component';
import { BlandasComponent } from './components/blandas/blandas.component';
import { PersonaService } from './servicios/persona.service';
import { RegistroComponent } from './components/registro/registro.component';
import { AuthService } from './servicios/auth.service';
import { TokenService } from './servicios/token.service';
import { InterceptorProvider } from './servicios/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    LoginComponent,
    EducacionComponent,
    ExperienciaComponent,
    CertificacionesComponent,
    BlandasComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PersonaService, AuthService, TokenService, InterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
