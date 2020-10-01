import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ExamplesComponent } from './examples/examples.component';
import { DeposerOffreEntrepriseComponent } from './deposer-offre-entreprise/deposer-offre-entreprise.component';
import { ModifierAnnonceRepreneursComponent } from './deposer-offre-entreprise/modifier-annonce-repreneurs/modifier-annonce-repreneurs.component';
import { AnnonceRepreneursListComponent } from './annonce-repreneurs-list/annonce-repreneurs-list.component';


const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'examples/login',       component: LoginComponent },
    { path: 'examples/profile',     component: ProfileComponent },
    { path: 'examples/annonce-offre', component: ExamplesComponent},
    { path: 'deposer-offre-entreprise', component: DeposerOffreEntrepriseComponent},
    { path: 'modifier-annonce-repreneurs/:i', component: ModifierAnnonceRepreneursComponent},
    { path: 'annonce-repreneurs-list', component: AnnonceRepreneursListComponent}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule
    ],
})
export class AppRoutingModule { }
