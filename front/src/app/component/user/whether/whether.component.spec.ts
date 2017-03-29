/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhetherComponent } from './whether.component';

describe('WhetherComponent', () => {
  let component: WhetherComponent;
  let fixture: ComponentFixture<WhetherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhetherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
