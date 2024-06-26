import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabelleComponent } from './tabelle/tabelle.component';
import { NavComponent } from './nav/nav.component';
import { CreateComponent } from './create/create.component';
import { FormComponent } from './tabelle/form/form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { pencilSquare } from 'ngx-bootstrap-icons';
import { trash } from 'ngx-bootstrap-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';

const icons = {
  pencilSquare,
  trash,
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabelleComponent,
    NavComponent,
    FormComponent,
    CreateComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxBootstrapIconsModule.pick(icons),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }