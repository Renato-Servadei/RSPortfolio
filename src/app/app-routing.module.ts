import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { CertificacionesComponent } from './components/certificaciones/certificaciones.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'banner', component: BannerComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'educacion', component: EducacionComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'certificaciones', component: CertificacionesComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
