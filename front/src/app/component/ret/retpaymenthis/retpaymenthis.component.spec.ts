/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RetpaymenthisComponent } from './retpaymenthis.component';

describe('RetpaymenthisComponent', () => {
  let component: RetpaymenthisComponent;
  let fixture: ComponentFixture<RetpaymenthisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetpaymenthisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetpaymenthisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
