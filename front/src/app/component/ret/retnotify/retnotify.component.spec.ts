/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RetnotifyComponent } from './retnotify.component';

describe('RetnotifyComponent', () => {
  let component: RetnotifyComponent;
  let fixture: ComponentFixture<RetnotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetnotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetnotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
