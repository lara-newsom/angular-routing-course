import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';
import {InMemoryWebApiModule }from 'angular-in-memory-web-api';

import { routes } from './app.routes';
import { AppData } from './app.data';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes,
    ),
    provideHttpClient(),
    importProvidersFrom(
      InMemoryWebApiModule.forRoot(AppData, { delay: 150 })
    ),
  ],
};
