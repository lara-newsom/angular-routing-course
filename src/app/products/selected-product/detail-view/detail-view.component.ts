import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PieService } from '../../../services/pie.service';
import { MatButton } from '@angular/material/button';
import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'app-detail-view',
    templateUrl: './detail-view.component.html',
    styleUrls: ['./detail-view.component.scss'],
    imports: [MatButton],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailViewComponent {
  protected readonly pieService = inject(PieService);
  protected readonly cartService = inject(CartService); // Assuming PieService has cart functionality
}
