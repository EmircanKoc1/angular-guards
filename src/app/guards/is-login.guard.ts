import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isLoginGuard: CanActivateFn = (route, state) => {

  let userName: string | null = localStorage.getItem("userName");

  if (userName !== null)
    return true;

  const router: Router = inject(Router);

  router.navigate(["login"]);

  return false;

};
