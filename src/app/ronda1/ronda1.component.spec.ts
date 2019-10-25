import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ronda1Component } from './ronda1.component';

describe('Ronda1Component', () => {
  let component: Ronda1Component;
  let fixture: ComponentFixture<Ronda1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ronda1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ronda1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
