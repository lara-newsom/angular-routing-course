import { Component } from '@angular/core';
import { SubHeroLogoComponent } from '../shared-ui/sub-hero-logo/sub-hero-logo.component';

@Component({
  selector: 'app-not-authorized',
  standalone: true,
  imports: [SubHeroLogoComponent],
  templateUrl: './not-authorized.component.html',
  styleUrls: ['./not-authorized.component.css']
})
export class NotAuthorizedComponent {

}
