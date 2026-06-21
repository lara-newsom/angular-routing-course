import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { HOME_ROUTE } from './app.routes';
import { FeatureFlagService } from './services/feature-flag.service';

export const isPizzaEnabledCanActivateGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const flagService = inject(FeatureFlagService)
  return flagService.isPizzaFeatureEnabled$.pipe(
    map(isEnabled => {
      return isEnabled ? true : router.createUrlTree([HOME_ROUTE]);
    })
  );
};
