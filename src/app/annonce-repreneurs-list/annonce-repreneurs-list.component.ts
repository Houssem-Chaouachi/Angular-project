import { Component, OnInit } from '@angular/core';
import { ListOffreService } from 'app/Services/list-offre.service';

@Component({
  selector: 'app-annonce-repreneurs-list',
  templateUrl: './annonce-repreneurs-list.component.html',
  styleUrls: ['./annonce-repreneurs-list.component.css']
})
export class AnnonceRepreneursListComponent implements OnInit {
container: any;
index: number
  constructor( private service: ListOffreService) { }

  ngOnInit(): void {
    this.container = this.service.getAll()
  }
  delete(i) {
    this.service.delete(i);
  }

}
