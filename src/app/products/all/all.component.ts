import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { BreadcrumbsComponent } from 'src/app/shared-ui/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrl: './all.component.scss',
  imports: [BreadcrumbsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllComponent {
  readonly pieService = inject(PieService);
  pies = this.pieService.filteredPies;

  selectPie(id: string){
    this.pieService.setSelectedPie(id);
  }
}
