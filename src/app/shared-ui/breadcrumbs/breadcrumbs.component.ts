import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { MatButton } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DETAIL_ROUTE, HOME_ROUTE, PRODUCTS_ROUTE } from 'src/app/app.routes';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
    imports: [MatButton, RouterLink, RouterLinkActive],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  readonly route = input.required<string>();
  protected readonly pieService = inject(PieService);

    protected readonly PRODUCTS_ROUTE = PRODUCTS_ROUTE;
    protected readonly HOME_ROUTE = HOME_ROUTE;
    protected readonly DETAIL_ROUTE = DETAIL_ROUTE;
}
