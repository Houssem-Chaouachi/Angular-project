import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAnnonceRepreneursComponent } from './modifier-annonce-repreneurs.component';

describe('ModifierAnnonceRepreneursComponent', () => {
  let component: ModifierAnnonceRepreneursComponent;
  let fixture: ComponentFixture<ModifierAnnonceRepreneursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierAnnonceRepreneursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierAnnonceRepreneursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
