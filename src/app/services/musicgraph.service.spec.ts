import { TestBed, inject } from '@angular/core/testing';

import { MusicgraphService } from './musicgraph.service';

describe('MusicgraphService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicgraphService]
    });
  });

  it('should be created', inject([MusicgraphService], (service: MusicgraphService) => {
    expect(service).toBeTruthy();
  }));
});
