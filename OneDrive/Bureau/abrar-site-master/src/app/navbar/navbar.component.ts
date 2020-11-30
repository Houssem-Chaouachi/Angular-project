import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toTopPage(): void {
    document.getElementById('page-top').scrollIntoView({behavior: 'smooth'});
  }
toCompanies(): void {
  document.getElementById('companies').scrollIntoView({block: 'center', behavior: 'smooth'});
}
toReferences(): void {
  document.getElementById('references').scrollIntoView({block: 'center', behavior: 'smooth'});
}
toContactUs(): void {
  document.getElementById('contact').scrollIntoView({block: 'center', behavior: 'smooth' });
}
scrollTop(){
document.getElementById('top').scrollIntoView({behavior: 'smooth'});
}
}
