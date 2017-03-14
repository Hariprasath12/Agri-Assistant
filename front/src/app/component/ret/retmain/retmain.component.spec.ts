/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RetmainComponent } from './retmain.component';

describe('RetmainComponent', () => {
  let component: RetmainComponent;
  let fixture: ComponentFixture<RetmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
