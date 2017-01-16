/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashboardSidebarComponent } from './dashboard-sidebar.component';
import { DashboardLayoutModule } from '../dashboard-layout.module';

describe('DashboardSidebarComponent', () => {
  let component: DashboardSidebarComponent;
  let fixture: ComponentFixture<DashboardSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ DashboardLayoutModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
