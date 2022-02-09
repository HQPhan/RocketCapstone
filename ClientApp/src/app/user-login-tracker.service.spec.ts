import { TestBed } from '@angular/core/testing';

import { UserLoginTrackerService } from './user-login-tracker.service';

describe('UserLoginTrackerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserLoginTrackerService = TestBed.get(UserLoginTrackerService);
    expect(service).toBeTruthy();
  });
});
