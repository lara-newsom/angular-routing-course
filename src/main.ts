import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';


bootstrapApplication(AppComponent, {
    providers: [
      provideBrowserGlobalErrorListeners(),
      provideZonelessChangeDetection(),
      provideRouter([]),
      provideAnimations(),
    ]
})
  .catch(err => console.error(err));
