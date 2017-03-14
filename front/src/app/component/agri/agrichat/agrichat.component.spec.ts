/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgrichatComponent } from './agrichat.component';

describe('AgrichatComponent', () => {
  let component: AgrichatComponent;
  let fixture: ComponentFixture<AgrichatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrichatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrichatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
