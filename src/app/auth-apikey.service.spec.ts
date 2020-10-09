import { TestBed } from '@angular/core/testing';

import { AuthAPIKeyService } from './auth-apikey.service';

describe('AuthAPIKeyService', () => {
  let service: AuthAPIKeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthAPIKeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
