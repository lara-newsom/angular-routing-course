import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrls: ['./app.scss'],
    imports: [HeaderComponent, RouterOutlet],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
}
