/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsermainComponent } from './usermain.component';

describe('UsermainComponent', () => {
  let component: UsermainComponent;
  let fixture: ComponentFixture<UsermainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
