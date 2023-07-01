import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeUpdatedComponent } from './home-updated/home-updated.component';
import { inject } from '@angular/core';
import { FeatureFlagService } from './services/feature-flag.service';
import { map } from 'rxjs';
import { AuthService } from './services/auth.service';
import { HelloService } from './services/hello.service';

export enum ROUTER_TOKENS {
  HOME = 'home',
  SHOP = 'shop',
  CONTACT = 'contact',
  ABOUT = 'about',
  CHECKOUT = 'checkout',
  CART = 'cart',
  NOT_AUTH = 'not-auth',
  NOT_READY = 'not-ready'
}

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: ROUTER_TOKENS.HOME,
    pathMatch: 'full',
  },
  {
    path: ROUTER_TOKENS.HOME,
    component: HomeUpdatedComponent,
    canMatch: [() => {
      const flagService = inject(FeatureFlagService);
      return flagService.featureFlags.pipe(map((flag) => {
        return !!flag.home
      }))
    }]
  },
  {
    path: ROUTER_TOKENS.HOME,
    component: HomeComponent,
  },
  {
    path: `${ROUTER_TOKENS.SHOP}/:categoryId` ,
    loadChildren: () => import('./products-view/products.routes').then(m => m.PRODUCT_ROUTES),
  },
  {
    path: ROUTER_TOKENS.CONTACT,
    loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent),
    canActivate: [
      () => {
        const flagService = inject(FeatureFlagService);
        return flagService.featureFlags.pipe(map((flag) => !!flag.contact))
      }],
    canMatch: [
      () => {
        const authService = inject(AuthService);
        return authService.userAuth.pipe(map((permissions) => !!permissions?.includes('contact')))
      }],
    resolve: {userHello: () => {
      const helloService = inject(HelloService);

      return helloService.getUserHello()
    }}
  },
  {
    path: ROUTER_TOKENS.CONTACT,
    redirectTo: ROUTER_TOKENS.NOT_AUTH,
  },
  {
    path: ROUTER_TOKENS.NOT_AUTH,
    loadComponent: () => import('./not-authorized/not-authorized.component').then(m => m.NotAuthorizedComponent),
  },
  {
    path: ROUTER_TOKENS.ABOUT,
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  },
  {
    path: ROUTER_TOKENS.CHECKOUT,
    outlet: ROUTER_TOKENS.CART,
    loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent),
    canActivate: [
      () => {
        const authService = inject(AuthService);
        return authService.userAuth.pipe(map((permissions) => !!permissions?.includes('cart')))
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
