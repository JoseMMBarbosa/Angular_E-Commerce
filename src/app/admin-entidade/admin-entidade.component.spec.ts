import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntidadeComponent } from './admin-entidade.component';

describe('AdminEntidadeComponent', () => {
  let component: AdminEntidadeComponent;
  let fixture: ComponentFixture<AdminEntidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEntidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEntidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
