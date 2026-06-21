import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbsComponent } from '../shared-ui/breadcrumbs/breadcrumbs.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pizza',
  imports: [BreadcrumbsComponent, RouterOutlet],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzaComponent {

}
