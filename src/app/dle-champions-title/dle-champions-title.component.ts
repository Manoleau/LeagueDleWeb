import { Component, Input } from '@angular/core';
import { ChampionModel } from '../models/champion-model';

@Component({
  selector: 'app-dle-champions-title',
  standalone: true,
  imports: [],
  templateUrl: './dle-champions-title.component.html',
  styleUrl: './dle-champions-title.component.css'
})
export class DleChampionsTitleComponent {
  @Input() champion!: ChampionModel
  selected: boolean = false

  ngOnChanges() {
    console.log('Champion modifié:', this.champion);
  }
}
