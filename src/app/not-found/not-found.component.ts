import { Component } from '@angular/core';
import { SubHeroLogoComponent } from '../shared-ui/sub-hero-logo/sub-hero-logo.component';

@Component({
  standalone: true,
  imports: [
    SubHeroLogoComponent,
  ],
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {

}
