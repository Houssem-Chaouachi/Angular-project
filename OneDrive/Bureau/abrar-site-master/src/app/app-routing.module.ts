import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CompaniesComponent } from './companies/companies.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AfcComponent } from './afc/afc.component';
import { CompetenceAfcComponent } from './afc/competence-afc/competence-afc.component';

import { AbcComponent } from './abc/abc.component';

const routes: Routes = [
  { path: '', component: CompaniesComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'afc', component: AfcComponent},
  { path: 'abc', component: AbcComponent},
  { path: 'competenceAfc', component: CompetenceAfcComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
