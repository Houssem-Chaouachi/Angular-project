import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceRepreneursListComponent } from './annonce-repreneurs-list.component';

describe('AnnonceRepreneursListComponent', () => {
  let component: AnnonceRepreneursListComponent;
  let fixture: ComponentFixture<AnnonceRepreneursListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnonceRepreneursListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceRepreneursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
