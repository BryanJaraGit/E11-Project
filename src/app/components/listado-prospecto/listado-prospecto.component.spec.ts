import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoProspectoComponent } from './listado-prospecto.component';

describe('ListadoProspectoComponent', () => {
  let component: ListadoProspectoComponent;
  let fixture: ComponentFixture<ListadoProspectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoProspectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoProspectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
