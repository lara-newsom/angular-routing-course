import { Router, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { inject } from '@angular/core';
import { FeatureFlagService } from './services/feature-flag.service';
import { map } from 'rxjs';
import { HelloService } from './services/hello.service';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './services/contact.service';
import { authRouteGuard } from './auth-route-guard';
import { NotReadyComponent } from './not-ready/not-ready.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { ROUTER_TOKENS } from './app-route.constants';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: ROUTER_TOKENS.HOME,
    pathMatch: 'full',
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
    component: ContactComponent,
    canActivate: [
      () => {
        const flagService = inject(FeatureFlagService);
        const router = inject(Router)

        return flagService.featureFlags.pipe(map((flag) => !!flag.contact  || router.parseUrl(`/${ROUTER_TOKENS.NOT_READY}`)))
      },
      authRouteGuard(ROUTER_TOKENS.CONTACT)
    ],
    resolve: {userHello: () => {
      const helloService = inject(HelloService);

      return helloService.getUserHello()
    }},
    canDeactivate: [() => {
      const contactService = inject(ContactService);
      return contactService.canDeactivate();
    }]
  },
  {
    path: ROUTER_TOKENS.NOT_AUTH,
    component: NotAuthorizedComponent,
  },
  {
    path: ROUTER_TOKENS.NOT_READY,
    component: NotReadyComponent,
  },
  {
    path: ROUTER_TOKENS.ABOUT,
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  },
  {
    path: ROUTER_TOKENS.CHECKOUT,
    outlet: ROUTER_TOKENS.CART,
    loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent),
    canActivate: [authRouteGuard(ROUTER_TOKENS.CART)]
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
