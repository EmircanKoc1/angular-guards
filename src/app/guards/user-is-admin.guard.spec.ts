import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { userIsAdminGuard } from './user-is-admin.guard';

describe('userIsAdminGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userIsAdminGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
