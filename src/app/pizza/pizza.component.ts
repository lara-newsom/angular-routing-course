import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pizza',
  imports: [RouterOutlet],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzaComponent {

}
