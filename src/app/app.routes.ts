import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [{
      path: '',
      component: HomeComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      }
    ]
  },
  {
    path: 'old',
    redirectTo: 'home',
  },
];
