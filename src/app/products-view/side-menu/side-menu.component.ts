import { Component } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    AsyncPipe,
  ],
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  pies$ = this.pieService.filteredPies$;

  constructor(
    private readonly pieService: PieService,
  ) {}

  selectPie(id: string){
    this.pieService.setSelectedPie(id);
  }
}
