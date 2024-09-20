import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiotApiService {
  private apiUrl = 'https://ddragon.leagueoflegends.com';

  constructor(private http: HttpClient) { }

  getChampionByName(championName: string): Observable<any> {
    const url = `${this.apiUrl}/cdn/14.18.1/data/fr_FR/champion/${championName}.json`;
    
    return this.http.get<any>(url);
  }

  getAllChampions(): Observable<any> {
    const url = `${this.apiUrl}/cdn/14.18.1/data/fr_FR/champion.json`;
    
    return this.http.get<any>(url);
  }
}
