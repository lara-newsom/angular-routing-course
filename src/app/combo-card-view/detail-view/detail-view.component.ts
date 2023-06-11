import { Component } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    AsyncPipe,
    MatButtonModule,
  ],
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent {
  selectedPie$ = this.pieService.selectedPie$;
  constructor(private readonly pieService: PieService,){}
}
