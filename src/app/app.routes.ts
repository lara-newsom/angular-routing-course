import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { PRODUCT_ROUTES } from './products-view/products.routes';
import { CartComponent } from './cart/cart.component';

export enum ROUTER_TOKENS {
  HOME = 'home',
  SHOP = 'shop',
  CONTACT = 'contact',
  ABOUT = 'about',
  CHECKOUT = 'checkout',
  CART = 'cart',
}

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
    component: ProductsViewComponent,
    loadChildren: () => import('./products-view/products.routes').then(m => m.PRODUCT_ROUTES)
  },
  {
    path: ROUTER_TOKENS.CONTACT,
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
  },
  {
    path: ROUTER_TOKENS.ABOUT,
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent),
  },
  {
    path: ROUTER_TOKENS.CHECKOUT,
    outlet: ROUTER_TOKENS.CART,
    loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
