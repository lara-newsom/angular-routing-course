import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './products/all-products/all-products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const HOME_ROUTE = 'home';
export const PRODUCTS_ROUTE = 'products';
export const DETAIL_ROUTE = 'detail';
export const LOGIN_ROUTE = 'login';
export const CONTACT_ROUTE = 'contact';
export const CART_ROUTE = 'cart';
export const ABOUT_ROUTE = 'about';

export const routes: Routes = [
  {
    path: '',
    redirectTo: HOME_ROUTE,
    pathMatch: 'full',
  },
  {
    path: HOME_ROUTE,
    component: HomeComponent,
  },
  {
    path: PRODUCTS_ROUTE,
    children: [
      {
        path: '',
        component: AllProductsComponent,
      },
      {
        path: DETAIL_ROUTE,
        component: ProductDetailComponent,
      },
    ]
  },
  {
    path: LOGIN_ROUTE,
    component: LoginComponent,
  },
  {
    path: CONTACT_ROUTE,
    component: ContactComponent,
  },
  {
    path: CART_ROUTE,
    component: CartComponent,
  },
  {
    path: ABOUT_ROUTE,
    component: AboutComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
