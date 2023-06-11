import { Component } from '@angular/core';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BreadcrumbsComponent } from '../shared-ui/breadcrumbs/breadcrumbs.component';

@Component({
  standalone: true,
  imports: [
    DetailViewComponent,
    SideMenuComponent,
    BreadcrumbsComponent,
  ],
  selector: 'app-combo-card-view',
  templateUrl: './combo-card-view.component.html',
  styleUrls: ['./combo-card-view.component.css']
})
export class ComboCardViewComponent {
}
