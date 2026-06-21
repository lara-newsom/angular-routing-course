import { ActivatedRouteSnapshot } from "@angular/router";
import { DETAIL_ROUTE } from "../app.routes";
import { AllProductsComponent } from "./all-products/all-products.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

export const PRODUCTS_ROUTES = [
      {
        path: ':categoryId',
        component: AllProductsComponent,
        title: (route: ActivatedRouteSnapshot) => {
          return `Bethany's - ${route.paramMap.get('categoryId')}`;
        }
      },
      {
        path: `:categoryId/${DETAIL_ROUTE}`,
        component: ProductDetailComponent,
      },
    ];
