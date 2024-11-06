import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Stat } from '../models/stat';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  stats: Stat[] = []

  constructor(private storageService: StorageService) {
    const winsTitleChampions = this.storageService.getItem('winsTitleChampions');
    const winsIconChampions = this.storageService.getItem('winsIconChampions');
    if (winsIconChampions) {
      this.stats.push({
        nom: 'Icon Champions',
        wins: parseInt(winsIconChampions),
        idStorage: 'winsIconChampions'
      })
    } else {
      this.stats.push({
        nom: 'Icon Champions',
        wins: 0,
        idStorage: 'winsIconChampions'
      })
    }
    if (winsTitleChampions) {
      this.stats.push({
        nom: 'Titre Champions',
        wins: parseInt(winsTitleChampions),
        idStorage: 'winsTitleChampions'
      })
    } else {
      this.stats.push({
        nom: 'Titre Champions',
        wins: 0,
        idStorage: 'winsTitleChampions'
      })
    }
    
  }
  addWinTo(nom: string) {
    const stat = this.stats.find(stat => stat.nom === nom);
    if (stat) {
        stat.wins++;
        this.storageService.setItem(stat.idStorage, stat.wins.toString())
    }
  }
  getStats(): Stat[] {
    return this.stats
  }
}
