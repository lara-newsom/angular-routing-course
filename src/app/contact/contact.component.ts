import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../shared-ui/breadcrumbs/breadcrumbs.component';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    imports: [BreadcrumbsComponent, MatButton]
})
export class ContactComponent {

}
