/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgriprofileComponent } from './agriprofile.component';

describe('AgriprofileComponent', () => {
  let component: AgriprofileComponent;
  let fixture: ComponentFixture<AgriprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
