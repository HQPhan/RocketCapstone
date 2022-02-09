import { TestBed } from '@angular/core/testing';

import { UserDatabaseAPIService } from './user-database-api.service';

describe('UserDatabaseAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDatabaseAPIService = TestBed.get(UserDatabaseAPIService);
    expect(service).toBeTruthy();
  });
});
