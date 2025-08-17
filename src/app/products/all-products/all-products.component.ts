import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { BreadcrumbsComponent } from '../../shared-ui/breadcrumbs/breadcrumbs.component';
import { RouterLink } from '@angular/router';
import { DETAIL_ROUTE } from '../../app.routes';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss',
  imports: [BreadcrumbsComponent, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllProductsComponent {
  readonly pieService = inject(PieService);
  pies = this.pieService.filteredPies;

  protected readonly DETAIL_ROUTE = DETAIL_ROUTE;

  selectPie(id: string){
    this.pieService.setSelectedPie(id);
  }
}
