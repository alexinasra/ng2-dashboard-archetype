/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';

import { DashboardModule } from './dashboard.module';
import { AuthGuard } from './auth-guard.service';

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ AuthGuard]
    });
  });

  it('should ...', inject([AuthGuard], (service: AuthGuard) => {
    expect(service).toBeTruthy();
  }));
});
