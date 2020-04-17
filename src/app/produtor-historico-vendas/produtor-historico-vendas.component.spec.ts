import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutorHistoricoVendasComponent } from './produtor-historico-vendas.component';

describe('ProdutorHistoricoVendasComponent', () => {
  let component: ProdutorHistoricoVendasComponent;
  let fixture: ComponentFixture<ProdutorHistoricoVendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutorHistoricoVendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutorHistoricoVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
