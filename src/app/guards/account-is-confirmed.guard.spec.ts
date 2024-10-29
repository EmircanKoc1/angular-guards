import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { accountIsConfirmedGuard } from './account-is-confirmed.guard';

describe('accountIsConfirmedGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => accountIsConfirmedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
