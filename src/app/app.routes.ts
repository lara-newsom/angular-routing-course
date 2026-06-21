import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewHomeComponent } from './home/new-home/new-home.component';
import { isPizzaEnabledCanActivateGuard } from './is-pizza-enabled-can-activate.guard';
import { isPizzaEnabledCanMatchGuard } from './is-pizza-enabled-can-match.guard';
import { isUserAuthenticatedCanMatchGuard } from './is-user-authenticated-can-match.guard';
import { leavePizzaCanDeactivateGuard } from './leave-pizza-can-deactivate.guard';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { PizzaComponent } from './pizza/pizza.component';
import { ContactComponent } from './contact/contact.component';
import { adminUserResolver } from './admin-user.resolver';

export const HOME_ROUTE = 'home';
export const NEW_HOME_ROUTE = 'new-home';
export const PRODUCTS_ROUTE = 'products';
export const DETAIL_ROUTE = 'detail';
export const LOGIN_ROUTE = 'login';
export const CONTACT_ROUTE = 'contact';
export const CART_ROUTE = 'cart';
export const ABOUT_ROUTE = 'about';
export const PIZZA_ROUTE = 'pizza';
export const ADMIN_ROUTE = 'admin';
export const NOT_ADMIN_ROUTE = 'not-admin';

export const routes: Routes = [
  {
    path: '',
    redirectTo: HOME_ROUTE,
    pathMatch: 'full',
  },
  {
    path: HOME_ROUTE,
    canMatch: [isPizzaEnabledCanMatchGuard],
    component: NewHomeComponent,
    title: 'Bethany\'s - Home',
  },
  {
    path: HOME_ROUTE,
    component: HomeComponent,
    title: 'Bethany\'s - Home',
  },
  {
    path: `${PRODUCTS_ROUTE}`,
    loadComponent: () => import('./products/wrapper.component').then(m => m.WrapperComponent),
    loadChildren: () => import('./products/products.routes').then(m => m.PRODUCTS_ROUTES),
    title: 'Bethany\'s - Shop',
  },
  {
    path: LOGIN_ROUTE,
    title: 'Bethany\'s - Login',
    loadComponent: () => import('./shared-ui/image-wrapper/image-wrapper.component').then(m => m.ImageWrapperComponent),
    data: {
      imageUrl: '../../assets/images/login.png',
      routePath: LOGIN_ROUTE,
      component: LoginComponent,
    },
  },
  {
    path: PIZZA_ROUTE,
    title: 'Bethany\'s - Pizza',
    canActivate: [isPizzaEnabledCanActivateGuard],
    loadComponent: () => import('./shared-ui/image-wrapper/image-wrapper.component').then(m => m.ImageWrapperComponent),
    data: {
      imageUrl: '../../assets/images/pizza-2.jpg',
      routePath: PIZZA_ROUTE,
      component: PizzaComponent,
    },
    children: [
      {
        path:'',
        canMatch: [isUserAuthenticatedCanMatchGuard],
        canDeactivate: [leavePizzaCanDeactivateGuard],
        loadComponent: () => import('./pizza/pizza-form/pizza-form.component').then(m => m.PizzaFormComponent),
      },
      {
        path:'',
        loadComponent: () => import('./pizza/pizza-not-found/pizza-not-found.component').then(m => m.PizzaNotFoundComponent),
      },
    ],
  },
  {
    path: CONTACT_ROUTE,
    title: 'Bethany\'s - Contact',
    loadComponent: () => import('./shared-ui/image-wrapper/image-wrapper.component').then(m => m.ImageWrapperComponent),
    data: {
      imageUrl: '../../assets/images/contact.png',
      routePath: CONTACT_ROUTE,
      component: ContactComponent,
    },
  },
  {
    path: CART_ROUTE,
    loadComponent: () => import('./cart/cart-modal/cart-modal.component').then(m => m.CartModalComponent),
    outlet: 'cartModal',
    title: 'Bethany\'s - Cart',
  },
  {
    path: ABOUT_ROUTE,
    title: 'Bethany\'s - About',
    loadComponent: () => import('./shared-ui/image-wrapper/image-wrapper.component').then(m => m.ImageWrapperComponent),
    data: {
      imageUrl: '../../assets/images/about.png',
      routePath: ABOUT_ROUTE,
      component: AboutComponent,
    },
  },
  {
    path: ADMIN_ROUTE,
    loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),
    resolve: {
      user: adminUserResolver
    }
  },
  {
    path: NOT_ADMIN_ROUTE,
    loadComponent: () => import('./admin/not-admin/not-admin.component').then(m => m.NotAdminComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'Bethany\'s - Not Found',
  },
];
