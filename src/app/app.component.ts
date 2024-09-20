import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChampionService } from './services/champion.service';
import { ChampionModel } from './models/champion-model';
import { ChampionComponent } from "./champion/champion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChampionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  allChampions: ChampionModel[] = []
  constructor(private championService: ChampionService) {}
  valideChampion() {
    const inputChampionName = document.getElementById('input-champion-name') as HTMLInputElement;
    if (inputChampionName) {
      const champion = getChampion(this.allChampions, inputChampionName.value);
      if (champion) {
        inputChampionName.value = ''
        champion.find = true;
        const element = document.getElementById(champion.idNom);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  }
  ngOnInit(): void {
    this.championService.getAllChampions().then(champions => {
      this.allChampions = melangerListe(champions)
    })
  }
}
function getChampion(champions: ChampionModel[], championName: string): ChampionModel | undefined {
  return champions.find(champion => champion.nom.toLowerCase() === championName.toLowerCase());
}

function melangerListe<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

