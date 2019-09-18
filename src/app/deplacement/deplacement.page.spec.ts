import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeplacementPage } from './deplacement.page';

describe('DeplacementPage', () => {
  let component: DeplacementPage;
  let fixture: ComponentFixture<DeplacementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeplacementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeplacementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
