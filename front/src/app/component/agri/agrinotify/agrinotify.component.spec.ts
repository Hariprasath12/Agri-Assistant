/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgrinotifyComponent } from './agrinotify.component';

describe('AgrinotifyComponent', () => {
  let component: AgrinotifyComponent;
  let fixture: ComponentFixture<AgrinotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrinotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrinotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
