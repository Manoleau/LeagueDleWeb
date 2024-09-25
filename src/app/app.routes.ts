import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DleChampionsTitleComponent } from './dle-champions-title/dle-champions-title.component';

export const routes: Routes = [
    { path: '', component: AppComponent }, // no leading slash
    { path: 'dle/titre-champions', component: DleChampionsTitleComponent } // no leading slash
];
