/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgripostlistComponent } from './agripostlist.component';

describe('AgripostlistComponent', () => {
  let component: AgripostlistComponent;
  let fixture: ComponentFixture<AgripostlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgripostlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgripostlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
