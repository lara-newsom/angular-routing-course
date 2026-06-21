import { DETAIL_ROUTE } from "../app.routes";
import { AllProductsComponent } from "./all-products/all-products.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

export const PRODUCTS_ROUTES = [
      {
        path: '',
        component: AllProductsComponent,
      },
      {
        path: DETAIL_ROUTE,
        component: ProductDetailComponent,
      },
    ];
