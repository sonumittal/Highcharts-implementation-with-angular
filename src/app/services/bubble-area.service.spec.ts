import { TestBed } from '@angular/core/testing';

import { BubbleAreaService } from './bubble-area.service';

describe('BubbleAreaService', () => {
  let service: BubbleAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BubbleAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
