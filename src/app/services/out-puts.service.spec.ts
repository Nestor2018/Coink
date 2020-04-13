import { TestBed } from '@angular/core/testing';

import { OutPutsService } from './out-puts.service';

describe('OutPutsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutPutsService = TestBed.get(OutPutsService);
    expect(service).toBeTruthy();
  });
});
