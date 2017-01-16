/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EmptyPageComponent } from './empty-page.component';
import { DashboardModule } from '../dashboard.module';
describe('EmptyPageComponent', () => {
  let component: EmptyPageComponent;
  let fixture: ComponentFixture<EmptyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ DashboardModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
