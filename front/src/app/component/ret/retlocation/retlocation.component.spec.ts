/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RetlocationComponent } from './retlocation.component';

describe('RetlocationComponent', () => {
  let component: RetlocationComponent;
  let fixture: ComponentFixture<RetlocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetlocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
