import {Component, inject, OnInit} from '@angular/core';
import {ChampionModel} from "../../models/champion-model";
import {ChampionService} from "../../services/champion.service";
import {StatsService} from "../../services/stats.service";
import {CommonService} from "../../services/common.service";

@Component({
  selector: 'app-dle-champions-abstract',
  standalone: true,
  imports: [],
  templateUrl: './dle-champions-abstract.component.html',
  styleUrl: './dle-champions-abstract.component.css'
})
export class DleChampionsAbstractComponent implements OnInit {
  allChampions: ChampionModel[] = []
  filteredChampions: ChampionModel[] = []
  championsTrouve: number = 0;
  championName: string = '';
  localStorageName: string | undefined;
  championService = inject(ChampionService);
  statsService = inject(StatsService);
  commonService = inject(CommonService);
  constructor() {}
  valideChampionFromPressEnter(): void {
    this.validerChampion(this.championName);
  }
  selectChampionFromChoice(championName: string) {
    this.validerChampion(championName);
  }
  filterChampions() {
    const query = this.championName.toLowerCase();
    if (query === '') {
      this.filteredChampions = []
    } else {
      this.filteredChampions = this.commonService.melangerListe(this.allChampions.filter(champion =>
        champion.nom.toLowerCase().includes(query)
      ));
    }
  }
  private validerChampion(championName: string) {
    const champion = this.championService.getChampionInTab(this.allChampions, championName);

    if (champion && !champion.find) {

      this.championName = ''
      champion.find = true;
      this.championsTrouve++;

      const element = document.getElementById(champion.key);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      this.filteredChampions = [];
      if (this.championsTrouve === this.allChampions.length && this.localStorageName) {
        this.statsService.addWinTo(this.localStorageName)
        alert('GG')
        document.location.reload();
      }
    }
  }
  ngOnInit() {
    this.championService.getAllChampions().then(champions => {
      this.allChampions = this.commonService.melangerListe(champions)
    })
  }
}
