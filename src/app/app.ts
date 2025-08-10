import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrls: ['./app.scss'],
    imports: [HeaderComponent, RouterOutlet],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  router = inject(Router);

  constructor() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        console.log('Route changed:', event);
      }
    });
  }
}
