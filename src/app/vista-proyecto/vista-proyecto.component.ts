import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vista-proyecto',
  templateUrl: './vista-proyecto.component.html',
  styleUrls: ['./vista-proyecto.component.scss']
})
export class VistaProyectoComponent {
  faBars=faBars
  faHouse=faHouse
  faPlus=faPlus
}
