import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarProspectoComponent } from './agregar-editar-prospecto.component';

describe('AgregarEditarProspectoComponent', () => {
  let component: AgregarEditarProspectoComponent;
  let fixture: ComponentFixture<AgregarEditarProspectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarProspectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEditarProspectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
