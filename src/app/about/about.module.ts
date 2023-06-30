import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';

const ABOUT_ROUTES = [
  {
    path: '',
    component: AboutComponent
  }
];

@NgModule({
  declarations: [AboutComponent],
  imports: [RouterModule.forChild(ABOUT_ROUTES)]
})
export class AboutModule {}
