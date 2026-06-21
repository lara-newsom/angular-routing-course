import { CanDeactivateFn } from '@angular/router';
import { PizzaFormComponent } from './pizza/pizza-form/pizza-form.component';

export const leavePizzaCanDeactivateGuard: CanDeactivateFn<PizzaFormComponent> = (component, currentRoute, currentState, nextState) => {
  if(!component.canSubmit()) return true;
  
  component.showLeaveModal.set(true);
  component.nextNavigation.set(nextState.url);
  return false;
};
