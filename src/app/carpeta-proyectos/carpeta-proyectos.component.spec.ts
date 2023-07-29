import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpetaProyectosComponent } from './carpeta-proyectos.component';

describe('CarpetaProyectosComponent', () => {
  let component: CarpetaProyectosComponent;
  let fixture: ComponentFixture<CarpetaProyectosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarpetaProyectosComponent]
    });
    fixture = TestBed.createComponent(CarpetaProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
