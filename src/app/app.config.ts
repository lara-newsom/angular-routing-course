import { provideAnimations } from '@angular/platform-browser/animations';
import { Route, provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

export const CONFIG = {
  providers: [
    provideAnimations(),
    provideRouter(ROUTES)
  ],
};

