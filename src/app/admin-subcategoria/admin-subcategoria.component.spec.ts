import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubcategoriaComponent } from './admin-subcategoria.component';

describe('AdminSubcategoriaComponent', () => {
  let component: AdminSubcategoriaComponent;
  let fixture: ComponentFixture<AdminSubcategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSubcategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSubcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
