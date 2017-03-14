/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogtrackComponent } from './logtrack.component';

describe('LogtrackComponent', () => {
  let component: LogtrackComponent;
  let fixture: ComponentFixture<LogtrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogtrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogtrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
