import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, NgForm, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  model: FormGroup;
  joueurs : any;
  index =  0;

  constructor(private formbuilder: FormBuilder) {
  }

  ngOnInit() {
    this.model = this.formbuilder.group({
        nom: ['', [
          Validators.required
        ]],
        prenom: ['', [
          Validators.required
        ]],
        age: ['', [
          Validators.required
        ]],
        ddn: ['', [
          Validators.required
        ]],
        tempsJeu: ['', [
          Validators.required
        ]],
        nbBut: ['', [
          Validators.required,
        ]],
        clubs: this.formbuilder.array([])
      }
    );
    this.joueurs = [];
  }

  get clubForm() {
    return this.model.get('clubs') as FormArray
  }

  addClub() {
    const club = this.formbuilder.group({
      club: []
    });
    this.clubForm.push(club)
  }

  showErrorRequiredNom(){
    const nom = this.model.controls.nom;
    return nom.touched && nom.hasError('required');
  }
  showErrorRequiredPrenom(){
    const prenom = this.model.controls.prenom;
    return prenom.touched && prenom.hasError('required');
  }

  showErrorRequiredAge(){
    const age = this.model.controls.age;
    return age.touched && age.hasError('required');
  }

  showErrorRequiredDdn(){
    const ddn = this.model.controls.ddn;
    return ddn.touched && ddn.hasError('required');
  }
  showErrorRequiredTdj(){
    const tempsJeu = this.model.controls.tempsJeu;
    return tempsJeu.touched && tempsJeu.hasError('required');
  }
  showErrorRequiredNbButs(){
    const nbBut = this.model.controls.nbBut;
    return nbBut.touched && nbBut.hasError('required');
  }

  addJoueur(){
    const j = this.formbuilder.group({
      joueur : [this.model.value]
    });
    this.joueurs.push(JSON.stringify(j.value));
    localStorage.setItem("listeJoueurs"+this.index, JSON.stringify(j.value))
    this.index = this.index + 1
  }
}



