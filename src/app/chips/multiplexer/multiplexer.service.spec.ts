import { TestBed } from '@angular/core/testing';

import { MultiplexerService } from './multiplexer.service';

describe('MultiplexerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultiplexerService = TestBed.get(MultiplexerService);
    expect(service).toBeTruthy();
  });
});
