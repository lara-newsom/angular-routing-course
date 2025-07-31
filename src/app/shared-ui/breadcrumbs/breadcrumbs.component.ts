import { Component, inject } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.css'],
    imports: [MatButton]
})
export class BreadcrumbsComponent {
  protected readonly pieService = inject(PieService);
}
