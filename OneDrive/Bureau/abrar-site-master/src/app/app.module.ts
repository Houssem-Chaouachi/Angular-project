import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CompaniesComponent } from './companies/companies.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { AfcComponent } from './afc/afc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CompetenceAfcComponent } from './afc/competence-afc/competence-afc.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReferencesComponent } from './references/references.component';
import { AbcComponent } from './abc/abc.component';
import { AnimatedCounterComponent } from './animated-counter/animated-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CompaniesComponent,
    AboutUsComponent,
    ContactUsComponent,
    FooterComponent,
    AfcComponent,
    CompetenceAfcComponent,
    ReferencesComponent,
    AbcComponent,
    AnimatedCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
