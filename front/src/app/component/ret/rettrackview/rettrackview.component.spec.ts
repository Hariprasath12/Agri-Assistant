/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RettrackviewComponent } from './rettrackview.component';

describe('RettrackviewComponent', () => {
  let component: RettrackviewComponent;
  let fixture: ComponentFixture<RettrackviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RettrackviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RettrackviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
