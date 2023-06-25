import { Component, inject } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from 'src/app/services/cart.service';

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
  readonly cartService = inject(CartService)
  selectedPie = this.cartService.selectedItemPlusQuantity;
}
