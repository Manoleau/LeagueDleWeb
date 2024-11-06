import { Component } from '@angular/core';
import { ChampionModel } from '../models/champion-model';
import { ChampionService } from '../services/champion.service';
import { StatsService } from '../services/stats.service';
import { ChampionCardIconComponent } from "../champion-card-icon/champion-card-icon.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dle-champions-icon',
  standalone: true,
  imports: [ChampionCardIconComponent, FormsModule],
  templateUrl: './dle-champions-icon.component.html',
  styleUrl: './dle-champions-icon.component.css'
})
export class DleChampionsIconComponent {
  allChampions: ChampionModel[] = []
  filteredChampions: ChampionModel[] = []
  championsTrouve: number = 0;
  championName: string = '';
  constructor(private championService: ChampionService, private statsService: StatsService) {}
  valideChampionFromPressEnter(): void {
    this.validerChampion(this.championName)
  }
  selectChampionFromChoice(championName: string) {
    this.validerChampion(championName);
  }
  filterChampions() {
    const query = this.championName.toLowerCase();
    if (query === '') {
      this.filteredChampions = []
    } else {
      this.filteredChampions = this.allChampions.filter(champion => 
        champion.nom.toLowerCase().includes(query)
      );
    }
  }
  private validerChampion(championName: string) {
    const champion = this.championService.getChampionInTab(this.allChampions, championName);
    
    if (champion && !champion.find) {
      
      this.championName = ''
      champion.find = true;
      this.championsTrouve++;

      const element = document.getElementById(champion.titre);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      
      this.filteredChampions = [];
      if (this.championsTrouve === this.allChampions.length) {
          this.statsService.addWinTo('Icon Champions')
          alert('GG')
          document.location.href = document.location.href
      }
    }
  }
  ngOnInit(): void {
    this.championService.getAllChampions().then(champions => {
      this.allChampions = melangerListe(champions)
    })

  }
}
function melangerListe<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}