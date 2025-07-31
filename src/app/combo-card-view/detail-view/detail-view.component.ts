import { Component } from '@angular/core';
import { PieService } from '../../services/pie.service';

@Component({
    selector: 'app-detail-view',
    templateUrl: './detail-view.component.html',
    styleUrls: ['./detail-view.component.css'],
    standalone: false
})
export class DetailViewComponent {
  selectedPie$ = this.pieService.selectedPie$;
  constructor(private readonly pieService: PieService,){}
}
