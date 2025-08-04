import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from "./products/products.component";
import { ContactComponent } from "./contact/contact.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { CartComponent } from "./cart/cart.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrls: ['./app.scss'],
    imports: [HeaderComponent, HomeComponent, LoginComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
}
