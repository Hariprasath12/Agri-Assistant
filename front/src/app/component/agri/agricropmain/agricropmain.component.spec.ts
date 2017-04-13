/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgricropmainComponent } from './agricropmain.component';

describe('AgricropmainComponent', () => {
  let component: AgricropmainComponent;
  let fixture: ComponentFixture<AgricropmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgricropmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgricropmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
