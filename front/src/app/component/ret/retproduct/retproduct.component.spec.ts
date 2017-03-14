/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RetproductComponent } from './retproduct.component';

describe('RetproductComponent', () => {
  let component: RetproductComponent;
  let fixture: ComponentFixture<RetproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
