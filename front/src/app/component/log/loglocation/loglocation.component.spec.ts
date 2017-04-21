/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoglocationComponent } from './loglocation.component';

describe('LoglocationComponent', () => {
  let component: LoglocationComponent;
  let fixture: ComponentFixture<LoglocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoglocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoglocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
