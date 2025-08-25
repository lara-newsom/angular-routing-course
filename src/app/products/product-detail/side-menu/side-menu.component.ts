import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PieService } from '../../../services/pie.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DETAIL_ROUTE, PRODUCTS_ROUTE } from 'src/app/app.routes';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink, RouterLinkActive]
})
export class SideMenuComponent {
  protected readonly pieService = inject(PieService);
  // deleted programmatic navigation and added route constants
  protected readonly PRODUCTS_ROUTE = PRODUCTS_ROUTE;
  protected readonly DETAIL_ROUTE = DETAIL_ROUTE;
}
