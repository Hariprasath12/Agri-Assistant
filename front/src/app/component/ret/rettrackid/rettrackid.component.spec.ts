/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RettrackidComponent } from './rettrackid.component';

describe('RettrackidComponent', () => {
  let component: RettrackidComponent;
  let fixture: ComponentFixture<RettrackidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RettrackidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RettrackidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
