import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';  // Import de AppComponent

@NgModule({
//   declarations: [
//     AppComponent,  // Déclare ton composant AppComponent ici
//   ],
  imports: [
    BrowserModule,
    HttpClientModule,  // Import du module HttpClient pour faire des requêtes HTTP
  ],
  providers: [],
//   bootstrap: [AppComponent]  // AppComponent est le composant racine
})
export class AppModule { }
