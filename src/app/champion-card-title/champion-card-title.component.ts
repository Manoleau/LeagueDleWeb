import { Component, Input } from '@angular/core';
import { ChampionModel } from '../models/champion-model';
@Component({
  selector: 'app-champion-card-title',
  standalone: true,
  imports: [],
  templateUrl: './champion-card-title.component.html',
  styleUrl: './champion-card-title.component.css'
})
export class ChampionCardTitleComponent {
  @Input() champion!: ChampionModel
  selected: boolean = false
}
