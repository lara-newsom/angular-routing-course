import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PieService } from '../../../services/pie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
  protected readonly pieService = inject(PieService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  selectPie(id: string){
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { pieId: id },
      queryParamsHandling: 'replace',
    })
  }

}
