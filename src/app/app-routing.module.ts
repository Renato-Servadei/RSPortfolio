import { NgModule } from '@angular/core';
import { GuardsCheckEnd, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { CertificacionesComponent } from './components/certificaciones/certificaciones.component';
import { BlandasComponent } from './components/blandas/blandas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { GuardsService as guard } from './servicios/guards.service';

const routes: Routes = [
  {path: 'about', component: AboutComponent, canActivate: [guard], data: {expectedRol: ['user', 'admin']}},
  {path: 'banner', component: BannerComponent, canActivate: [guard], data: {expectedRol: ['user', 'admin']}},
  {path: 'projects', component: ProjectsComponent, canActivate: [guard], data: {expectedRol: ['user', 'admin']}},
  {path: 'skills', component: SkillsComponent, canActivate: [guard], data: {expectedRol: ['user', 'admin']}},
  {path: 'contact', component: ContactComponent, canActivate: [guard], data: {expectedRol: ['user', 'admin']}},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'educacion', component: EducacionComponent, canActivate: [guard], data: {expectedRol: ['user', 'admin']}},
  {path: 'experiencia', component: ExperienciaComponent, canActivate: [guard], data: {expectedRol: ['user', 'admin']}},
  {path: 'certificaciones', component: CertificacionesComponent, canActivate: [guard], data: {expectedRol: ['user', 'admin']}},
  {path: 'blandas', component: BlandasComponent, canActivate: [guard], data: {expectedRol: ['user', 'admin']}},
  {path: '', redirectTo: '/login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
