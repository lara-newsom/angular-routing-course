import { Routes } from "@angular/router";
import { DetailViewComponent } from "./detail-view/detail-view.component";
import { CustomizeViewComponent } from "./customize-view/customize-view.component";

export const productRoutes: Routes = [
  {
    path: 'detail',
    component: DetailViewComponent
  },
  {
    path: 'customize',
    component: CustomizeViewComponent
  }
];
