import { TestBed } from '@angular/core/testing';

import { SystemVariableService } from './system-variable.service';

describe('SystemVariableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SystemVariableService = TestBed.get(SystemVariableService);
    expect(service).toBeTruthy();
  });
});
