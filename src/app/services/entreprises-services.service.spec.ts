import { TestBed } from '@angular/core/testing';

import { EntreprisesServicesService } from './entreprises-services.service';

describe('EntreprisesServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntreprisesServicesService = TestBed.get(EntreprisesServicesService);
    expect(service).toBeTruthy();
  });
});
