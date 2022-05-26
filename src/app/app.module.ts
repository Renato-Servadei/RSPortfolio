import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioDataService } from './servicios/portfolio-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EducacionComponent } from './about/educacion/educacion.component';
import { ExperienciaComponent } from './about/experiencia/experiencia.component';
import { CertificacionesComponent } from './about/certificaciones/certificaciones.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


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
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PortfolioDataService ],//, {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
