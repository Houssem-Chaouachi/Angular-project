import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ListOffreService {
 deposer = JSON.parse(localStorage.getItem('offre')) || [];
  constructor() { }
  add(data) {
    this.deposer.push(data)
    localStorage.setItem('offre', JSON.stringify(this.deposer));
  }
  getAll() {
    return this.deposer
  }
  delete(i) {
    this.deposer.splice(i, 1)
    localStorage.setItem('offre', JSON.stringify(this.deposer));
  }

  update(i, form) {
    this.deposer[i] = form;
    localStorage.setItem('offre', JSON.stringify(this.deposer));
  }
  getItemByIndex(i) {
    return this.deposer[i];
  }
}
