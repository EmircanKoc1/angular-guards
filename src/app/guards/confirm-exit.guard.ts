import { CanDeactivateFn } from '@angular/router';

export const confirmExitGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState) => {


  console.log(component);
  console.log(currentRoute);
  console.log(currentState);
  console.log(nextState);


  return confirm("bilgilerin kaydedilmemiş olabilir çıkmayı onaylıyormusun ?");
};
