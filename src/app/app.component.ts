import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChampionService } from './services/champion.service';
import { ChampionModel } from './models/champion-model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  currentChampion!: ChampionModel
  constructor(private championService: ChampionService) {}

  changeChampion() {
    const inputChampionName = document.getElementById('input-champion-name') as HTMLInputElement;
    if (inputChampionName) {
      const championName = inputChampionName.value;
      this.championService.addChampion(championName).then(champion => {
        this.currentChampion = champion
      }).catch(error => {
        console.error('Erreur lors de la récupération du champion', error);
      });
    }
  }

  ngOnInit(): void {
    this.championService.addChampion('Diana').then(champion => {
      this.currentChampion = champion
    }).catch(error => {
      console.error('Erreur lors de l\'ajout du champion', error);
    });
  }
}
