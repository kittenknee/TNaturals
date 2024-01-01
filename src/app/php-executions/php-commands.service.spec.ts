import { TestBed } from '@angular/core/testing';

import { PhpCommandsService } from './php-commands.service';

describe('PhpCommandsService', () => {
  let service: PhpCommandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhpCommandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
