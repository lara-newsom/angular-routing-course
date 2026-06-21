import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { HOME_ROUTE } from './app.routes';
import { FeatureFlagService } from './services/feature-flag.service';

export const isPizzaEnabledCanActivateChildGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);
  const flagService = inject(FeatureFlagService)
  return flagService.isPizzaFeatureEnabled$.pipe(
    map(isEnabled => {
      return isEnabled ? true : router.createUrlTree([HOME_ROUTE]);
    })
  );
};
