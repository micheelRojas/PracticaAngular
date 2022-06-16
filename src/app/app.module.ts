import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormPersonaComponent } from './Personas/form-persona/form-persona.component';
import { ListPersonaComponent } from './Personas/list-persona/list-persona.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialModule } from './Material.Module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MensajesModule } from './mensajes/mensajes.module';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    FormPersonaComponent,
    ListPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatSliderModule,
    MensajesModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: 'crearPersona', component: FormPersonaComponent },
    ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
