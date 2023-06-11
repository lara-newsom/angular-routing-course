import { Component } from '@angular/core';
import { PieService } from '../../services/pie.service';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {
  selectedCategory$ = this.pieService.selectedCategory$;
  selectedPie$ = this.pieService.selectedPie$;

  constructor(private readonly pieService: PieService){}
}
