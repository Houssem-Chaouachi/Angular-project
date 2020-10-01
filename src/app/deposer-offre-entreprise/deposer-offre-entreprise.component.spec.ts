import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeposerOffreEntrepriseComponent } from './deposer-offre-entreprise.component';

describe('DeposerOffreEntrepriseComponent', () => {
  let component: DeposerOffreEntrepriseComponent;
  let fixture: ComponentFixture<DeposerOffreEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeposerOffreEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeposerOffreEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
