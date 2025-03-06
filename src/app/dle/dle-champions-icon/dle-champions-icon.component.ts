import {Component, OnInit} from '@angular/core';
import { ChampionModel } from '../../models/champion-model';
import { ChampionService } from '../../services/champion.service';
import { StatsService } from '../../services/stats.service';
import { ChampionCardIconComponent } from "../../components/champion-card-icon/champion-card-icon.component";
import { FormsModule } from '@angular/forms';
import {CommonService} from "../../services/common.service";
import {DleChampionsAbstractComponent} from "../dle-champions-abstract/dle-champions-abstract.component";

@Component({
  selector: 'app-dle-champions-icon',
  standalone: true,
  imports: [ChampionCardIconComponent, FormsModule],
  templateUrl: './dle-champions-icon.component.html',
  styleUrl: './dle-champions-icon.component.css'
})
export class DleChampionsIconComponent extends DleChampionsAbstractComponent implements OnInit {
  constructor(
    ) {
    super();
    this.localStorageName = 'Icon Champions'
  }

}
