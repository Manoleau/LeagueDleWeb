import { Component, Input } from '@angular/core';
import { ChampionModel } from '../models/champion-model';

@Component({
  selector: 'app-champion',
  standalone: true,
  imports: [],
  templateUrl: './champion.component.html',
  styleUrl: './champion.component.css'
})
export class ChampionComponent {
    @Input() champion!: ChampionModel
}
