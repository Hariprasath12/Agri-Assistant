/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgripostComponent } from './agripost.component';

describe('AgripostComponent', () => {
  let component: AgripostComponent;
  let fixture: ComponentFixture<AgripostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgripostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgripostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
