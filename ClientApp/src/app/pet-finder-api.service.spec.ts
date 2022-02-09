import { TestBed } from '@angular/core/testing';

import { PetFinderAPIService } from './pet-finder-api.service';

describe('PetFinderAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetFinderAPIService = TestBed.get(PetFinderAPIService);
    expect(service).toBeTruthy();
  });
});
