import { TestBed } from '@angular/core/testing';

import { HTTPAPIKeyInterceptor } from './http-apikey.interceptor';

describe('HTTPAPIKeyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HTTPAPIKeyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HTTPAPIKeyInterceptor = TestBed.inject(HTTPAPIKeyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
