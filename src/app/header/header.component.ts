import { Component, inject } from '@angular/core';
import { Category } from '../models/pie';
import { PieService } from '../services/pie.service';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ROUTER_TOKENS } from '../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
  ],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  readonly Category = Category;
  readonly ROUTER_TOKENS = ROUTER_TOKENS;

  private readonly pieService = inject(PieService);

  changeCategory(category: Category){
    this.pieService.setSelectedCategory(category);
  }

}
