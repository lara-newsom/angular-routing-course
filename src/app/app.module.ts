import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ComboCardViewComponent } from './combo-card-view/combo-card-view.component';
import { SideMenuComponent } from './combo-card-view/side-menu/side-menu.component';
import { DetailViewComponent } from './combo-card-view/detail-view/detail-view.component';
import { RouterModule } from '@angular/router';
import { SubHeroLogoComponent } from './shared-ui/sub-hero-logo/sub-hero-logo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { SubSectionComponent } from './home/sub-section/sub-section.component';
import { CardComponent } from './home/sub-section/card/card.component';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BreadcrumbsComponent } from './shared-ui/breadcrumbs/breadcrumbs.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComboCardViewComponent,
    SideMenuComponent,
    DetailViewComponent,
    SubHeroLogoComponent,
    NotFoundComponent,
    HeroSectionComponent,
    SubSectionComponent,
    CardComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
