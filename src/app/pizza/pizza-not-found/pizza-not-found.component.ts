import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LOGIN_ROUTE } from '../../app.routes';

@Component({
  selector: 'app-pizza-not-found',
  imports: [RouterLink],
  templateUrl: './pizza-not-found.component.html',
  styleUrl: './pizza-not-found.component.scss'
})
export class PizzaNotFoundComponent {
protected readonly LOGIN_ROUTE = LOGIN_ROUTE;
}
