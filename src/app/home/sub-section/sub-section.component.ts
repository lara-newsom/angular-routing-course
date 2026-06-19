import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-sub-section',
    templateUrl: './sub-section.component.html',
    styleUrls: ['./sub-section.component.scss'],
    imports: [CardComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubSectionComponent {
  readonly cartService = inject(CartService);
}
