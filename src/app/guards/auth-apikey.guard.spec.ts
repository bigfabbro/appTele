import { TestBed } from '@angular/core/testing';

import { AuthAPIKEYGuard } from './auth-apikey.guard';

describe('AuthAPIKEYGuard', () => {
  let guard: AuthAPIKEYGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthAPIKEYGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
