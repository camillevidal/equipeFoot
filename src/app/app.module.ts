import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { ListeJoueurComponent } from './liste-joueur/liste-joueur.component';
import { FicheJoueurComponent } from './fiche-joueur/fiche-joueur.component';
import { AjoutJoueurComponent } from './ajout-joueur/ajout-joueur.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule,MatNativeDateModule,MatFormFieldModule,MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule} from '@angular/material/menu';
import { EquipesComponent } from './equipes/equipes.component';
import { JoueursComponent } from './joueurs/joueurs.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListeJoueurComponent,
    FicheJoueurComponent,
    AjoutJoueurComponent,
    EquipesComponent,
    JoueursComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
   
 
    
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
