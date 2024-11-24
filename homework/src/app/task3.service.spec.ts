import { TestBed } from '@angular/core/testing';

import { Task3Service } from './task3.service';

describe('Task3Service', () => {
  let service: Task3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Task3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
