import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { Stat } from '../models/stat';
import { StatsService } from '../services/stats.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatDivider, MatIconModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  
  stats: Stat[] = []

  constructor (private statsService: StatsService) {}

  ngOnInit(): void {
    this.stats= this.statsService.getStats()
  }

}
