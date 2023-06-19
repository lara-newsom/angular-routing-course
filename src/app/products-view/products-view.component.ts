import { Component } from '@angular/core';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BreadcrumbsComponent } from '../shared-ui/breadcrumbs/breadcrumbs.component';

@Component({
  standalone: true,
  imports: [
    DetailViewComponent,
    SideMenuComponent,
    BreadcrumbsComponent,
  ],
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent {
}
