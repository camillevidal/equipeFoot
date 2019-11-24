import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeJoueurComponent } from './liste-joueur.component';

describe('ListeJoueurComponent', () => {
  let component: ListeJoueurComponent;
  let fixture: ComponentFixture<ListeJoueurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeJoueurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
