import { TestBed } from '@angular/core/testing';

import { TopHolderService } from './top-holder.service';

describe('TopHolderService', () => {
  let service: TopHolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopHolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
