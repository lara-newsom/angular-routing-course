import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { BreadcrumbsComponent } from 'src/app/shared-ui/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-product-detail',
  imports: [SideMenuComponent, DetailCardComponent, BreadcrumbsComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent {

}
