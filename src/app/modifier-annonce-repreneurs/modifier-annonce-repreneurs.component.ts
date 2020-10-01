import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListOffreService } from 'app/Services/list-offre.service';


@Component({
  selector: 'app-modifier-annonce-repreneurs',
  templateUrl: './modifier-annonce-repreneurs.component.html',
  styleUrls: ['./modifier-annonce-repreneurs.component.css']
})
export class ModifierAnnonceRepreneursComponent implements OnInit {
modifierAnnonce: FormGroup;
index;
  constructor(private service: ListOffreService, private _Activatedroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.index = this._Activatedroute.snapshot.paramMap.get('i')
    this.modifierAnnonce = new FormGroup({
      img: new FormControl(''),
      nomEntreprise: new FormControl(''),
      prix: new FormControl(''),
      secteur: new FormControl(''),
      localisation: new FormControl(''),
      detail: new FormControl('')
    });
this.loadItem();
  }
loadItem() {
  const data = this.service.getItemByIndex(this.index);
  this.modifierAnnonce.patchValue(data);
}
confirmerModification() {
  this.service.update(this.index, this.modifierAnnonce.value);
  this.router.navigateByUrl('/deposer-offre-entreprise');
}
}
