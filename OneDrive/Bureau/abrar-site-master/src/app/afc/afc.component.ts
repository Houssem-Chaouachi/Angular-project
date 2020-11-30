import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as AOS from 'aos';


@Component({
  selector: 'app-afc',
  templateUrl: './afc.component.html',
  styleUrls: ['./afc.component.css']
})
export class AfcComponent implements OnInit {
submitted = false;
contactForm: FormGroup;
panelOpenState = false;
  constructor( private formBuilder: FormBuilder) { AOS.init();}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      email: ['', [Validators.required && Validators.email]],
      tel: ['', [Validators.required && Validators.minLength(8)]],
      msg: ['', [Validators.required]]
    });
}
  get form() {
    return this.contactForm.controls;
  }

onsubmit(): void {
  this.submitted = true;
  if (this.contactForm.invalid){
    return;
  }
}
// toTop(): void{
//   document.getElementById('page-topAfc').scrollIntoView({behavior: 'smooth'});
// }
// toCompetence(): void {
//   document.getElementById('competenceAfc').scrollIntoView({ behavior: 'smooth'});
// }
// toExpertise(): void {
//   document.getElementById('expertiseAfc').scrollIntoView({block: 'center' , behavior: 'smooth'});
// }
// toContactAfc(): void {
//   document.getElementById('contactAfc').scrollIntoView({block: 'center' , behavior: 'smooth'});
// }
  }


