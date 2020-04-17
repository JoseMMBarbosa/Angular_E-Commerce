import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutorListaProdutosComponent } from './produtor-lista-produtos.component';

describe('ProdutorListaProdutosComponent', () => {
  let component: ProdutorListaProdutosComponent;
  let fixture: ComponentFixture<ProdutorListaProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutorListaProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutorListaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
