import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { MatIconModule} from '@angular/material/icon';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule} from '@angular/material/input';
import { MatRadioModule} from '@angular/material/radio'
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DeposerOffreEntrepriseComponent } from './deposer-offre-entreprise/deposer-offre-entreprise.component';
import { AnnonceRepreneursListComponent } from './annonce-repreneurs-list/annonce-repreneurs-list.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        DeposerOffreEntrepriseComponent,
        AnnonceRepreneursListComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        MatIconModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        FormsModule,
        MatRadioModule,
        MatInputModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
