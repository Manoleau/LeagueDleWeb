import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DleChampionsTitleComponent } from './dle-champions-title/dle-champions-title.component';

export const routes: Routes = [
    {path: '/', component: AppComponent},
    {path: '/dle/titre-champions', component: DleChampionsTitleComponent}
];
