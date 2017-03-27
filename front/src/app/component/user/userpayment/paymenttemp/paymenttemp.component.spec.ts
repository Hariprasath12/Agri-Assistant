/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaymenttempComponent } from './paymenttemp.component';

describe('PaymenttempComponent', () => {
  let component: PaymenttempComponent;
  let fixture: ComponentFixture<PaymenttempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymenttempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymenttempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
