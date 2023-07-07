import { Routes } from '@angular/router';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { CustomizeViewComponent } from './customize-view/customize-view.component';
import { ProductsViewComponent } from './products-view.component';
import { PRODUCT_ROUTER_TOKENS } from './product-routes.constant';

export const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    component: ProductsViewComponent,
    children: [
      {
        path: PRODUCT_ROUTER_TOKENS.DETAIL,
        component: DetailViewComponent
      },
      {
        path: PRODUCT_ROUTER_TOKENS.CUSTOMIZE,
        component: CustomizeViewComponent
      }
   ],
 }
];
