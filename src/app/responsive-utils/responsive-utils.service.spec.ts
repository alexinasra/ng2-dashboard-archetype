/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResponsiveUtilsService } from './responsive-utils.service';

describe('ResponsiveUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResponsiveUtilsService]
    });
  });

  it('should ...', inject([ResponsiveUtilsService], (service: ResponsiveUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
