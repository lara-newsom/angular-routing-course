import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Pie } from '../../../models/pie';
import { CartButtonComponent } from '../../../shared-ui/cart-button/cart-button.component';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    imports: [CartButtonComponent, CurrencyPipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  readonly pie = input.required<Pie>();
}
