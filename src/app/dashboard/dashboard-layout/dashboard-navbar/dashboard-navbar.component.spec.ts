/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashboardNavbarComponent } from './dashboard-navbar.component';
import { DashboardLayoutModule } from '../dashboard-layout.module';

describe('DashboardNavbarComponent', () => {
  let component: DashboardNavbarComponent;
  let fixture: ComponentFixture<DashboardNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ DashboardLayoutModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
