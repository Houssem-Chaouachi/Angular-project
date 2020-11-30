import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceAfcComponent } from './competence-afc.component';

describe('CompetenceAfcComponent', () => {
  let component: CompetenceAfcComponent;
  let fixture: ComponentFixture<CompetenceAfcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetenceAfcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceAfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
