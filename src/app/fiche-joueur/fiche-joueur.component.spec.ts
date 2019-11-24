import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheJoueurComponent } from './fiche-joueur.component';

describe('FicheJoueurComponent', () => {
  let component: FicheJoueurComponent;
  let fixture: ComponentFixture<FicheJoueurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheJoueurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
