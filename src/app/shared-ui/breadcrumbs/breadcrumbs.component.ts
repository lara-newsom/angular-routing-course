import { Component } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
  ],
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {
  selectedCategory$ = this.pieService.selectedCategory$;
  selectedPie$ = this.pieService.selectedPie$;

  constructor(private readonly pieService: PieService){}
}
