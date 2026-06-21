import { Component } from '@angular/core';
import { SubSectionComponent } from '../sub-section/sub-section.component';
import { RouterLink } from '@angular/router';
import { LogoBannerComponent } from '../../shared-ui/logo-banner/logo-banner.component';
import { PIZZA_ROUTE } from '../../app.routes';

@Component({
  selector: 'app-new-home',
  imports: [SubSectionComponent, LogoBannerComponent, RouterLink],
  templateUrl: './new-home.component.html',
  styleUrl: './new-home.component.scss'
})
export class NewHomeComponent {
  protected readonly PIZZA_ROUTE = PIZZA_ROUTE;
}
