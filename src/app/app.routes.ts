import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
    {path: '', component: MainContentComponent},
    {path: 'contacts', component: ContactPageComponent},
];
