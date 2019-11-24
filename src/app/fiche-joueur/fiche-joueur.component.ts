import { Component, OnInit } from '@angular/core';
import { Joueur } from '../joueur'
@Component({
  selector: 'app-fiche-joueur',
  templateUrl: './fiche-joueur.component.html',
  styleUrls: ['./fiche-joueur.component.css']
})
export class FicheJoueurComponent implements OnInit {

  constructor() { }
  unJoueur: Joueur
  ngOnInit() {
  }

}
