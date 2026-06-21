import { Router, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewHomeComponent } from './home/new-home/new-home.component';
import { inject } from '@angular/core';
import { FeatureFlagService } from './services/feature-flag.service';
import { map } from 'rxjs';

export const HOME_ROUTE = 'home';
export const NEW_HOME_ROUTE = 'new-home';
export const PRODUCTS_ROUTE = 'products';
export const DETAIL_ROUTE = 'detail';
export const LOGIN_ROUTE = 'login';
export const CONTACT_ROUTE = 'contact';
export const CART_ROUTE = 'cart';
export const ABOUT_ROUTE = 'about';
export const PIZZA_ROUTE = 'pizza';

export const routes: Routes = [
  {
    path: '',
    redirectTo: HOME_ROUTE,
    pathMatch: 'full',
  },
  {
    path: NEW_HOME_ROUTE,
    component: NewHomeComponent,
  },
  {
    path: HOME_ROUTE,
    component: HomeComponent,
  },
  {
    path: `${PRODUCTS_ROUTE}`,
    loadComponent: () => import('./products/wrapper.component').then(m => m.WrapperComponent),
    loadChildren: () => import('./products/products.routes').then(m => m.PRODUCTS_ROUTES),
  },
  {
    path: LOGIN_ROUTE,
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
  },
  {
    path: PIZZA_ROUTE,
    canActivate: [() => {
      const router = inject(Router);
      const flagService = inject(FeatureFlagService)
      return flagService.isPizzaFeatureEnabled$.pipe(
        map(isEnabled => {
          return isEnabled ? true : router.createUrlTree([HOME_ROUTE]);
        })
      );
    }],
    loadComponent: () => import('./pizza/pizza.component').then(m => m.PizzaComponent),
    children: [
      {
        path:'',
        loadComponent: () => import('./pizza/pizza-form/pizza-form.component').then(m => m.PizzaFormComponent),
      },
      {
        path:'',
        loadComponent: () => import('./pizza/pizza-not-found/pizza-not-found.component').then(m => m.PizzaNotFoundComponent),
      },
    ]
  },
  {
    path: CONTACT_ROUTE,
    loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: CART_ROUTE,
    loadComponent: () => import('./cart/cart-modal/cart-modal.component').then(m => m.CartModalComponent),
    outlet: 'cartModal',
  },
  {
    path: ABOUT_ROUTE,
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent),
  },
];
