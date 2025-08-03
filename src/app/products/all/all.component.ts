import { Component, inject } from '@angular/core';
import { PieService } from '../../services/pie.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrl: './all.component.scss'
})
export class AllComponent {
  readonly pieService = inject(PieService);
  pies = this.pieService.filteredPies;

  selectPie(id: string){
    this.pieService.setSelectedPie(id);
  }
}
