/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LognotifyComponent } from './lognotify.component';

describe('LognotifyComponent', () => {
  let component: LognotifyComponent;
  let fixture: ComponentFixture<LognotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LognotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LognotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
