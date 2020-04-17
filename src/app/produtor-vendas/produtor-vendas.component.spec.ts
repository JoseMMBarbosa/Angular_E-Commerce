import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutorVendasComponent } from './produtor-vendas.component';

describe('ProdutorVendasComponent', () => {
  let component: ProdutorVendasComponent;
  let fixture: ComponentFixture<ProdutorVendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutorVendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutorVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
