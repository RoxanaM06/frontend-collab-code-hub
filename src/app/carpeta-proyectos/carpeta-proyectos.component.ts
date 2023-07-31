import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carpeta-proyectos',
  templateUrl: './carpeta-proyectos.component.html',
  styleUrls: ['./carpeta-proyectos.component.scss']
})
export class CarpetaProyectosComponent {
  @Input() numeroProyecto:any;
}
