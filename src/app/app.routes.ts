import { Routes } from '@angular/router';
import { DleChampionsTitleComponent } from './dle-champions-title/dle-champions-title.component';
import { DleChampionsIconComponent } from './dle-champions-icon/dle-champions-icon.component';

export const routes: Routes = [
    { path: 'titre-champions', component: DleChampionsTitleComponent },
    { path: '', component: DleChampionsIconComponent },
];
