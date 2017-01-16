/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashboardPageComponent } from './dashboard-page.component';
import { DashboardLayoutModule } from '../dashboard-layout.module';

describe('DashboardPageComponent', () => {
  let component: DashboardPageComponent;
  let fixture: ComponentFixture<DashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ DashboardLayoutModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
