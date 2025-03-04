import {inject, Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {firstValueFrom, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiotApiService implements OnInit{
  protected apiUrl = 'https://ddragon.leagueoflegends.com';
  protected version = ''
  protected http = inject(HttpClient);
  constructor() {}

  fetchCurrentVersion() {
    return this.http.get<string[]>(`${this.apiUrl}/api/versions.json`);
  }
  async ngOnInit() {
    const tmp = await firstValueFrom(this.fetchCurrentVersion());
    this.version = tmp[0];
  }
}
