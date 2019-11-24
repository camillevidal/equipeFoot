import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';


@Component({
  selector: 'app-ajout-joueur',
  templateUrl: './ajout-joueur.component.html',
  styleUrls: ['./ajout-joueur.component.css']
})
export class AjoutJoueurComponent {

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


  updateProfile() {
    this.formJoueur.patchValue({
      nom: 'Mbappé',
      palmares: {
        nr: '7',
        poste: 'Attaquant'
      }
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.formJoueur.value);
    localStorage.setItem("joueur", JSON.stringify(this.formJoueur.value));
  }
}
