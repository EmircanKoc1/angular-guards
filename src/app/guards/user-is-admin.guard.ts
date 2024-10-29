import { CanMatchFn } from '@angular/router';

export const userIsAdminGuard: CanMatchFn = (route, segments) => {

  const isAdmin = localStorage.getItem("isAdmin")
  if (isAdmin === "true" )
    return true;


  return false;
};
