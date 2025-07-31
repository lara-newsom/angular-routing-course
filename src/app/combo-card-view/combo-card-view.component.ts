import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../shared-ui/breadcrumbs/breadcrumbs.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

@Component({
    selector: 'app-combo-card-view',
    templateUrl: './combo-card-view.component.html',
    styleUrls: ['./combo-card-view.component.css'],
    imports: [BreadcrumbsComponent, SideMenuComponent, DetailViewComponent]
})
export class ComboCardViewComponent {
}
