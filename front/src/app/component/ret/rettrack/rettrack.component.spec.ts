/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RettrackComponent } from './rettrack.component';

describe('RettrackComponent', () => {
  let component: RettrackComponent;
  let fixture: ComponentFixture<RettrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RettrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RettrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
