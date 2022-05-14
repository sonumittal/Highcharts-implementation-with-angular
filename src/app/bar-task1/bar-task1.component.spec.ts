import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarTask1Component } from './bar-task1.component';

describe('BarTask1Component', () => {
  let component: BarTask1Component;
  let fixture: ComponentFixture<BarTask1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarTask1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarTask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
