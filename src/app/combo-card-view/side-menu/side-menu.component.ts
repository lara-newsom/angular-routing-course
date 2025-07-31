import { Component } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css'],
    imports: [AsyncPipe]
})
export class SideMenuComponent {
  pies$ = this.pieService.filteredPies$;
  selectedPie$ = this.pieService.selectedPie$;

  constructor(
    private readonly pieService: PieService,
  ) {}

  selectPie(id: number){
    this.pieService.setSelectedPie(id);
  }
}
