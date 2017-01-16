/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthenticateService } from './authenticate.service';
import { AuthenticationModule } from './authentication.module';
describe('AuthenticateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AuthenticationModule ]
    });
  });

  it('should ...', inject([AuthenticateService], (service: AuthenticateService) => {
    expect(service).toBeTruthy();
  }));
});
