/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgrifarmerlistComponent } from './agrifarmerlist.component';

describe('AgrifarmerlistComponent', () => {
  let component: AgrifarmerlistComponent;
  let fixture: ComponentFixture<AgrifarmerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrifarmerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrifarmerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
