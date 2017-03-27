/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaymenthisComponent } from './paymenthis.component';

describe('PaymenthisComponent', () => {
  let component: PaymenthisComponent;
  let fixture: ComponentFixture<PaymenthisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymenthisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymenthisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
