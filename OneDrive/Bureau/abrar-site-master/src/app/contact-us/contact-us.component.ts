import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebRequestService } from '../web-request.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
contactUsForm: FormGroup;
submitted = false;
successMsg:string;
errorMsg: string;
  constructor( private formBuilder: FormBuilder, private webReq: WebRequestService) { }

  ngOnInit(): void {
    this.contactUsForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      email: ['', [Validators.required && Validators.email]],
      tel: ['', [Validators.required && Validators.minLength(8)]],
      msg: ['', [Validators.required]]
    });
  }
  get form() {
    return this.contactUsForm.controls;
  }

onsubmit(): void {
  this.submitted = true;
  if (this.contactUsForm.invalid){
    return;
  }
}
sendMail(){
  this.webReq.sendMail(this.contactUsForm.value).subscribe(data => {
this.successMsg = 'Your message has been sent successfully';
  },
  err => {
if (err.error.message){
  this.errorMsg = err.error.message;
}
  });
}
}
