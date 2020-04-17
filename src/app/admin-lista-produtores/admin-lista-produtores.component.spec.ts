import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListaProdutoresComponent } from './admin-lista-produtores.component';

describe('AdminListaProdutoresComponent', () => {
  let component: AdminListaProdutoresComponent;
  let fixture: ComponentFixture<AdminListaProdutoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListaProdutoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListaProdutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
