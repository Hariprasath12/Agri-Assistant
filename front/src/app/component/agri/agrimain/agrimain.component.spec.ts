/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgrimainComponent } from './agrimain.component';

describe('AgrimainComponent', () => {
  let component: AgrimainComponent;
  let fixture: ComponentFixture<AgrimainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrimainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrimainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
