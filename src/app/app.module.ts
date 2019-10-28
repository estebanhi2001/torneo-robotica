import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { Ronda1Component } from './ronda1/ronda1.component';
import { Ronda2Component } from './ronda2/ronda2.component';
import { DesafiosComponent } from './desafios/desafios.component';
import { PuntajesFinalesComponent } from './puntajesfinales/puntajesfinales.component';
import { EnvivoComponent } from './envivo/envivo.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { AdminComponent } from './admin/admin.component';
import { UniversalvariablesService} from './universalvariables.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    Ronda1Component,
    Ronda2Component,
    DesafiosComponent,
    PuntajesFinalesComponent,
    EnvivoComponent,
    BienvenidaComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [UniversalvariablesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
