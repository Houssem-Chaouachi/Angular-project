import { DOCUMENT } from '@angular/common';
import { Component, OnInit, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';
import 'rxjs/add/operator/filter';
import { NavigationEnd, Router } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private _router: Subscription;
  title;
  @ViewChild(NavbarComponent) navbar: NavbarComponent;
  constructor(private renderer: Renderer2, private router: Router, @Inject(DOCUMENT,)
 private document: any, private element: ElementRef, ) { }
  ngOnInit() {
    var navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
    this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe(
      (event: NavigationEnd) => {
        if (window.outerWidth > 991) {
          window.document.children[0].scrollTop = 0;
        } else {
          window.document.activeElement.scrollTop = 0;
        }
        this.renderer.listen('window', 'scroll', (event) => {

          const number = window.scrollY;
          if (number > 150 || window.pageYOffset > 150) {
            navbar.classList.remove('navbar-transparant');
          }
          else{
            navbar.classList.add('navbar-transparant');
          }
        });
      }
    );
  }
}
