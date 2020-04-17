import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutorProdutoComponent } from './produtor-produto.component';

describe('ProdutorProdutoComponent', () => {
  let component: ProdutorProdutoComponent;
  let fixture: ComponentFixture<ProdutorProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutorProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutorProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
