import { Component, Input, inject } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { tap } from 'rxjs';
import { PRODUCT_ROUTER_TOKENS } from '../products.routes';

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
  @Input() customize = false;

  private readonly pieService = inject(PieService);
  pies$ = this.pieService.filteredPies$;

  readonly PRODUCT_ROUTER_TOKENS = PRODUCT_ROUTER_TOKENS;
  readonly customizeLink = `./${PRODUCT_ROUTER_TOKENS.CUSTOMIZE}`;
  readonly detailLink = `./${PRODUCT_ROUTER_TOKENS.DETAIL}`;
}
