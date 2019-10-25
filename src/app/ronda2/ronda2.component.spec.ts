import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ronda2Component } from './ronda2.component';

describe('Ronda2Component', () => {
  let component: Ronda2Component;
  let fixture: ComponentFixture<Ronda2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ronda2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ronda2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
