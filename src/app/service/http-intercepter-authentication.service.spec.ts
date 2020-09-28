import { TestBed } from '@angular/core/testing';

import { HttpIntercepterAuthenticationService } from './http-intercepter-authentication.service';

describe('HttpIntercepterAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpIntercepterAuthenticationService = TestBed.get(HttpIntercepterAuthenticationService);
    expect(service).toBeTruthy();
  });
});
