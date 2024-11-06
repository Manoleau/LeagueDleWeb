import { Component, Input } from '@angular/core';
import { ChampionModel } from '../models/champion-model';

@Component({
  selector: 'app-champion-card-icon',
  standalone: true,
  imports: [],
  templateUrl: './champion-card-icon.component.html',
  styleUrl: './champion-card-icon.component.css'
})
export class ChampionCardIconComponent {
  @Input() champion!: ChampionModel
  selected: boolean = false
}
