import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCriarAdminsComponent } from './admin-criar-admins.component';

describe('AdminCriarAdminsComponent', () => {
  let component: AdminCriarAdminsComponent;
  let fixture: ComponentFixture<AdminCriarAdminsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCriarAdminsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCriarAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
