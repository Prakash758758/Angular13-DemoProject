import { TestBed } from '@angular/core/testing';

import { CustTableService } from './cust-table.service';

describe('CustTableService', () => {
  let service: CustTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
