import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerProspectoComponent } from './ver-prospecto.component';

describe('VerProspectoComponent', () => {
  let component: VerProspectoComponent;
  let fixture: ComponentFixture<VerProspectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerProspectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerProspectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
