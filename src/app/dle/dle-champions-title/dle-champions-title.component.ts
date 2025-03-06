import {Component, OnInit} from '@angular/core';
import { ChampionModel } from '../../models/champion-model';
import { ChampionService } from '../../services/champion.service';
import { FormsModule } from '@angular/forms';
import { ChampionCardTitleComponent } from '../../components/champion-card-title/champion-card-title.component';
import { StorageService } from '../../services/storage.service';
import { StatsService } from '../../services/stats.service';
import {CommonService} from "../../services/common.service";
import {DleChampionsAbstractComponent} from "../dle-champions-abstract/dle-champions-abstract.component";

@Component({
  selector: 'app-dle-champions-title',
  standalone: true,
  imports: [FormsModule, ChampionCardTitleComponent],
  templateUrl: './dle-champions-title.component.html',
  styleUrl: './dle-champions-title.component.css'
})
export class DleChampionsTitleComponent extends DleChampionsAbstractComponent implements OnInit{

  constructor() {
    super();
    this.localStorageName = 'Titre Champions'
  }
}
