/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CroplistComponent } from './croplist.component';

describe('CroplistComponent', () => {
  let component: CroplistComponent;
  let fixture: ComponentFixture<CroplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
