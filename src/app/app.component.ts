import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChampionService } from './services/champion.service';
import { ChampionModel } from './models/champion-model';
import { HeaderComponent } from "./header/header.component";
import { DleChampionsTitleComponent } from "./dle-champions-title/dle-champions-title.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, DleChampionsTitleComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  allChampions: ChampionModel[] = []
  filteredChampions: ChampionModel[] = []
  championsTrouve: number = 0;
  championName: string = '';
  constructor(private championService: ChampionService) {}
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
        // TODO GGEZ
      }
    }
  }
  ngOnInit(): void {
    // const locaStorageChampions) {
    //   this.allChampions = localStorageChampions;
    // }lStorageChampions = localStorage.getItem('champions')
    // if (local
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

