import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanesInformativosComponent } from './planes-informativos/planes-informativos.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { VistaProyectoComponent } from './vista-proyecto/vista-proyecto.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { CrearEditarProyectoComponent } from './crear-editar-proyecto/crear-editar-proyecto.component';
import { CambiarPlanComponent } from './cambiar-plan/cambiar-plan.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "landing-page",
    component: LandingPageComponent
  },
  {
    path: "planes",
    component: PlanesInformativosComponent
  },
  {
    path: "vista_Proyecto",
    component: VistaProyectoComponent
  },
  {
    path: "perfil_Usuario",
    component: PerfilUsuarioComponent
  },
  {
    path: "crearEditarProyecto",
    component: CrearEditarProyectoComponent
  },
  {
    path: "cambiarPlan",
    component: CambiarPlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
