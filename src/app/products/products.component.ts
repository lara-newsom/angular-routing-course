import { Component, inject } from '@angular/core';
import { BreadcrumbsComponent } from '../shared-ui/breadcrumbs/breadcrumbs.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { PieService } from '../services/pie.service';
import { AllComponent } from './all/all.component';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    imports: [BreadcrumbsComponent, SideMenuComponent, DetailViewComponent, AllComponent]
})
export class ProductsComponent {
  protected readonly pieService = inject(PieService);
}
