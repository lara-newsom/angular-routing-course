import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { BreadcrumbsComponent } from 'src/app/shared-ui/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss',
  imports: [BreadcrumbsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllProductsComponent {
  readonly pieService = inject(PieService);
  pies = this.pieService.filteredPies;

  selectPie(id: string){
    this.pieService.setSelectedPie(id);
  }
}
