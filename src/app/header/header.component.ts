import { Component } from '@angular/core';
import { Category } from '../models/pie';
import { PieService } from '../services/pie.service';

@Component({
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
