import { Component, inject } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { MatButton } from '@angular/material/button';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-detail-view',
    templateUrl: './detail-view.component.html',
    styleUrls: ['./detail-view.component.css'],
    imports: [MatButton, AsyncPipe]
})
export class DetailViewComponent {
  private readonly pieService = inject(PieService);

  selectedPie$ = this.pieService.selectedPie$;
}
