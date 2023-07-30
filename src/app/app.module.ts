import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {  FontAwesomeModule  }  from  '@fortawesome/angular-fontawesome' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PlanesInformativosComponent } from './planes-informativos/planes-informativos.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { VistaProyectoComponent } from './vista-proyecto/vista-proyecto.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { CarpetaProyectosComponent } from './carpeta-proyectos/carpeta-proyectos.component';
import { CambiarPlanComponent } from './cambiar-plan/cambiar-plan.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PlanesInformativosComponent,
    LandingPageComponent,
    LoginComponent,
    RecuperarContrasenaComponent,
    CrearCuentaComponent,
    VistaProyectoComponent,
    Navbar2Component,
    CarpetaProyectosComponent,
    CambiarPlanComponent,
    PerfilUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
