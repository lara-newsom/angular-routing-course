import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';
import {InMemoryWebApiModule }from 'angular-in-memory-web-api';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppData } from './app.data';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes,
    ),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(
      InMemoryWebApiModule.forRoot(AppData, { delay: 150 })
    ),
  ],
};
