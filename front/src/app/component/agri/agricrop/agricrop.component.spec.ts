/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgricropComponent } from './agricrop.component';

describe('AgricropComponent', () => {
  let component: AgricropComponent;
  let fixture: ComponentFixture<AgricropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgricropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgricropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
