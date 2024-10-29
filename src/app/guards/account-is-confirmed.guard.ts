import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const accountIsConfirmedGuard: CanActivateChildFn = (childRoute, state) => {

  let confirm: string | null = localStorage.getItem("accountIsConfirmed");

  if (confirm !== null && confirm == "true")
    return true;


  return false;
};
