import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTipoProdutoComponent } from './admin-tipo-produto.component';

describe('AdminTipoProdutoComponent', () => {
  let component: AdminTipoProdutoComponent;
  let fixture: ComponentFixture<AdminTipoProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTipoProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTipoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
