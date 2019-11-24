import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Joueur } from '../joueur'


@Component({
  selector: 'app-ajout-joueur',
  templateUrl: './ajout-joueur.component.html',
  styleUrls: ['./ajout-joueur.component.css']
})
export class AjoutJoueurComponent {
  joueur: Joueur[] = []
  newJoueur: string;
  formJoueur = this.fb.group({
    prenom: ['', Validators.required],
    nom: [''],
    ddn: [''],
    palmares: this.fb.group({
      buts: [''],
      tempsJeu: [''],
      poste: [''],
      nr: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.formJoueur.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.refreshJoueurs();
  }

  private refreshJoueurs() {
    const joueur = localStorage.getItem('todos')
    this.joueur = joueur ? JSON.parse(joueur) : []
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    console.warn(this.formJoueur.value);
    localStorage.setItem("joueur", JSON.stringify(this.formJoueur.value));
  }
  addJoueur() {
    this.joueur.push({
      //nom: this.joueur.reduce((acc, t) => acc <= t.nom ? t.id + 1 : acc, 1),
      task: this.newJoueur,
      isDone: false
    })
    this.onSubmit()
  }

}
