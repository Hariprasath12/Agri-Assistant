/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogpaymenthisComponent } from './logpaymenthis.component';

describe('LogpaymenthisComponent', () => {
  let component: LogpaymenthisComponent;
  let fixture: ComponentFixture<LogpaymenthisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogpaymenthisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogpaymenthisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
