import { Component } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { MatButton } from '@angular/material/button';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.css'],
    imports: [MatButton, AsyncPipe]
})
export class BreadcrumbsComponent {
  selectedCategory$ = this.pieService.selectedCategory$;
  selectedPie$ = this.pieService.selectedPie$;

  constructor(private readonly pieService: PieService){}
}
