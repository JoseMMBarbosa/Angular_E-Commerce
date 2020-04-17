import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasDetalhesComponent } from './compras-detalhes.component';

describe('ComprasDetalhesComponent', () => {
  let component: ComprasDetalhesComponent;
  let fixture: ComponentFixture<ComprasDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
