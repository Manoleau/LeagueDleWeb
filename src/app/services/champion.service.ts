import { Injectable } from '@angular/core';
import { ChampionModel } from '../models/champion-model';
import { RiotApiService } from './api/riot-api.service';
import { CompetenceChampionModel } from '../models/competence-champion-model';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  private champions: ChampionModel[] = []
  private urlImageChampion: string = 'https://ddragon.leagueoflegends.com/cdn/14.18.1/img/champion'
  private urlImagePassive: string = 'https://ddragon.leagueoflegends.com/cdn/14.18.1/img/passive'
  private urlImageSpell: string = 'https://ddragon.leagueoflegends.com/cdn/14.18.1/img/spell'
  
  constructor(private riotApiService: RiotApiService) { }

  addChampion(championName: string): Promise<ChampionModel> {
    return new Promise((resolve, reject) => {
      this.riotApiService.getChampionByName(championName).subscribe(data => {
        const championData = data["data"][championName]
        const spellsChampion: CompetenceChampionModel[] = []
        championData['spells'].forEach((spell: any) => {
            spellsChampion.push({
              nom: spell['name'],
              description: spell['description'],
              image: `${this.urlImageSpell}/${spell['image']['full']}`,
              ressource: spell['resource']
            })
        });
  
        const championResultat: ChampionModel = {
          key: championData['key'],
          nom: championData['name'],
          titre: championData['title'],
          image: `${this.urlImageChampion}/${championData['image']['full']}`,
          ressource: championData['partype'],
          tags: championData['tags'],
          passif: {
            nom: championData['passive']['name'],
            description: championData['passive']['description'],
            image: `${this.urlImagePassive}/${championData['passive']['image']['full']}`,
            ressource: ''
          },
          compentences: spellsChampion
        };
  
        this.champions.push(championResultat);
        resolve(championResultat);
      }, error => {
        console.error(error);
        reject(error);
      });
    });
  }
  
  getChampion(championName: string): ChampionModel {
    let championResultat!: ChampionModel
    this.champions.forEach((champion: ChampionModel) => {
      if (champion.nom === championName) {
        championResultat = champion;
      }
    })
    return championResultat
  }

}
