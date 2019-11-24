import { Component } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

export type EditorType = 'formJoueur' | 'joueurs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  editor: EditorType = 'formJoueur'
  get showFormJoueur() {
    return this.editor === 'formJoueur'
  }
  get showJoueurs() {
    return this.editor === 'joueurs'
  }
  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
