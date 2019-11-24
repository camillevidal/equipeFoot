import { Component, OnInit } from '@angular/core';
import { Joueur } from '../Joueur'
@Component({
  selector: 'app-liste-joueur',
  templateUrl: './liste-joueur.component.html',
  styleUrls: ['./liste-joueur.component.css']
})

export class ListeJoueurComponent implements OnInit {
  joueurs = Joueur
  constructor() { }

  ngOnInit() {
    var lesJoueurs=[];
    for (let i = 0; i < localStorage.length; i++) {
     lesJoueurs.push(localStorage.getItem('joueur'));
   }
   console.log(lesJoueurs)
  }
 

}
