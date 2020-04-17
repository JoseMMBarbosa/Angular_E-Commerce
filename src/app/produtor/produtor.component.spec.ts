import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutorComponent } from './produtor.component';

describe('ProdutorComponent', () => {
  let component: ProdutorComponent;
  let fixture: ComponentFixture<ProdutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
