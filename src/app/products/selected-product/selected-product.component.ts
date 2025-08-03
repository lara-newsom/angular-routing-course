import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { BreadcrumbsComponent } from 'src/app/shared-ui/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-selected-product',
  imports: [SideMenuComponent, DetailViewComponent, BreadcrumbsComponent],
  templateUrl: './selected-product.component.html',
  styleUrl: './selected-product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectedProductComponent {

}
