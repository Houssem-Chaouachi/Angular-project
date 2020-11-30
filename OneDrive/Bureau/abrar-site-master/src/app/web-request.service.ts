import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
readonly ROOT_URL;
baseUrl: any;
  constructor( private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000' ;
   }
   sendMail(payload) {
   return this.http.post(`${this.ROOT_URL}/send-mail`, payload);
   }
}
