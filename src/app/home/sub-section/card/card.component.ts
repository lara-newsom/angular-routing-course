import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Pie } from '../../../models/pie';
import { CartButtonComponent } from '../../../shared-ui/cart-button/cart-button.component';
import { PieService } from '../../../services/pie.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    imports: [CartButtonComponent, CurrencyPipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  readonly pie = input.required<Pie>();
  private readonly pieService = inject(PieService);

  selectPie(pieId: string) {
    this.pieService.setSelectedPie(pieId);
    // route to the detail page
  }
}
