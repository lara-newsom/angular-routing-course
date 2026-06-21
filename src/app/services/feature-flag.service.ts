import { Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { from, map } from 'rxjs';
;

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagService {
  readonly featureFlags = from(fetch('/assets/feature-flags.json').then(res => res.json())
  .then(json => {
    return json as {isPizzaFeatureEnabled: boolean};
  }));

  isPizzaFeatureEnabled$ = this.featureFlags.pipe(map(flags => flags.isPizzaFeatureEnabled));

  isPizzaFeatureEnabled = rxResource({stream: () => this.featureFlags.pipe(map(flags => flags.isPizzaFeatureEnabled))});
}
