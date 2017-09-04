import { TestBed, inject } from '@angular/core/testing';

import { CognitoRegisterService } from './cognito-register.service';

describe('CognitoRegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CognitoRegisterService]
    });
  });

  it('should be created', inject([CognitoRegisterService], (service: CognitoRegisterService) => {
    expect(service).toBeTruthy();
  }));
});
