import { Component, inject } from '@angular/core';
import { Category } from '../models/pie';
import { PieService } from '../services/pie.service';
import { MatMenuItem, MatMenuTrigger, MatMenu } from '@angular/material/menu';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    imports: [MatMenuItem, MatButton, MatMenuTrigger, MatMenu]
})
export class HeaderComponent {
  protected readonly pieService = inject(PieService);

  changeCategory(category: Category){
    this.pieService.setSelectedCategory(category);
  }

}
