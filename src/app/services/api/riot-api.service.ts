import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiotApiService {
  protected apiUrl = 'https://ddragon.leagueoflegends.com';
  protected version = ''
  protected http = inject(HttpClient);
  constructor() {}

  fetchCurrentVersion() {
    return this.http.get<string[]>(`${this.apiUrl}/api/versions.json`);
  }
  getCurrentVersion() {
    return new Promise((resolve, reject) => {
      this.fetchCurrentVersion().subscribe({
        next: (data) => {
          resolve(data[0])
        },
        error: err => {
          console.error(err);
          reject(err)
        }
      })
    })
  }
}
