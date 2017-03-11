/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogprofileComponent } from './logprofile.component';

describe('LogprofileComponent', () => {
  let component: LogprofileComponent;
  let fixture: ComponentFixture<LogprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
