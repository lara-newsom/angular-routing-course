import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  standalone: true,
  imports: [CardComponent],
  selector: 'app-sub-section',
  templateUrl: './sub-section.component.html',
  styleUrls: ['./sub-section.component.css']
})
export class SubSectionComponent {

}
