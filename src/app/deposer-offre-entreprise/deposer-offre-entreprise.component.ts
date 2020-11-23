import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListOffreService } from 'app/Services/list-offre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposer-offre-entreprise',
  templateUrl: './deposer-offre-entreprise.component.html',
  styleUrls: ['./deposer-offre-entreprise.component.css']
})
export class DeposerOffreEntrepriseComponent implements OnInit {
  deposerAnnonce: FormGroup;
  page = 1;
  index: number;
  container: any;
  Offre = JSON.parse(localStorage.getItem('offre')) || [];

  constructor(private service: ListOffreService, private router: Router) { }

  ngOnInit(): void {
    this.deposerAnnonce = new FormGroup({
      img: new FormControl('', [Validators.required]),
      nomEntreprise: new FormControl('', [Validators.required]),
      prix: new FormControl('', [Validators.required]),
      secteur: new FormControl('', [Validators.required]),
      localisation: new FormControl('', [Validators.required]),
      detail: new FormControl('', [Validators.required])
    })
    // this.container = this.service.getAll()
  }
  ADD() {
this.service.add(this.deposerAnnonce.value);
  }

}
