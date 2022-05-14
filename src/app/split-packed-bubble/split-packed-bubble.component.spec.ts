import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitPackedBubbleComponent } from './split-packed-bubble.component';

describe('SplitPackedBubbleComponent', () => {
  let component: SplitPackedBubbleComponent;
  let fixture: ComponentFixture<SplitPackedBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitPackedBubbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitPackedBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
