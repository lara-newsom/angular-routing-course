import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    MatMenuModule,
    MatButtonModule,
    HeaderComponent,
    HomeComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
