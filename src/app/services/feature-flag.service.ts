import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagService {
  private readonly http = inject(HttpClient);

  featureFlags = this.http.get<{home: boolean, contact: boolean}>('http://localhost:3000/feature-flags');
}
