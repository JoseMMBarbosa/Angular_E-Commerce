import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistoProdutorComponent } from './registo-produtor.component';

describe('RegistoProdutorComponent', () => {
  let component: RegistoProdutorComponent;
  let fixture: ComponentFixture<RegistoProdutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistoProdutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistoProdutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
