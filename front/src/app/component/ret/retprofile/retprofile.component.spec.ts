/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RetprofileComponent } from './retprofile.component';

describe('RetprofileComponent', () => {
  let component: RetprofileComponent;
  let fixture: ComponentFixture<RetprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
