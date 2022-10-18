import { TestBed } from '@angular/core/testing';

import { MetalumService } from './metalum.service';

describe('MetalumService', () => {
  let service: MetalumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetalumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
