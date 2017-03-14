/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogupdateComponent } from './logupdate.component';

describe('LogupdateComponent', () => {
  let component: LogupdateComponent;
  let fixture: ComponentFixture<LogupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
