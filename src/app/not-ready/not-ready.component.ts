import { Component } from '@angular/core';
import { SubHeroLogoComponent } from '../shared-ui/sub-hero-logo/sub-hero-logo.component';

@Component({
  selector: 'app-not-ready',
  standalone: true,
  imports: [SubHeroLogoComponent],
  templateUrl: './not-ready.component.html',
  styleUrls: ['./not-ready.component.css']
})
export class NotReadyComponent {

}
