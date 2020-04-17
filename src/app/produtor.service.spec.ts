import { TestBed } from '@angular/core/testing';

import { ProdutorService } from './produtor.service';

describe('ProdutorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdutorService = TestBed.get(ProdutorService);
    expect(service).toBeTruthy();
  });
});
