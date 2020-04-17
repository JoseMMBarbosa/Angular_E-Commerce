import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQualificacaoComponent } from './admin-qualificacao.component';

describe('AdminQualificacaoComponent', () => {
  let component: AdminQualificacaoComponent;
  let fixture: ComponentFixture<AdminQualificacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminQualificacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQualificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
