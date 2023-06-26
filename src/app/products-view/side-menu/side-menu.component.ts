import { Component } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ROUTER_TOKENS } from 'src/app/app.routes';

@Component({
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    AsyncPipe,
    RouterLink,
    RouterLinkActive,
  ],
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  pies$ = this.pieService.filteredPies$;

  readonly ROUTER_TOKENS = ROUTER_TOKENS;

  constructor(
    private readonly pieService: PieService,
  ) {}

  selectPie(id: string){
    this.pieService.setSelectedPie(id);
  }
}
