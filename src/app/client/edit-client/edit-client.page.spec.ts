import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { editClientPage } from './edit-client.page';

describe('editClientPage', () => {
  let component: editClientPage;
  let fixture: ComponentFixture<editClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ editClientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(editClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
