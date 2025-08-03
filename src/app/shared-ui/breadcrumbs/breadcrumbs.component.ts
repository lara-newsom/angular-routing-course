import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
    imports: [MatButton],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  readonly route = input.required<string>();
  protected readonly pieService = inject(PieService);
}
