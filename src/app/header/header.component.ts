import { Component } from '@angular/core';
import { Category } from '../models/pie';
import { PieService } from '../services/pie.service';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    RouterLink
  ],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  readonly Category = Category;
  constructor(
    private readonly pieService: PieService
  ){}

  changeCategory(category: Category){
    this.pieService.setSelectedCategory(category);
  }

}
