import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PainelComponent } from './painel/painel.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './painel/header/header.component';
import { FooterComponent } from './painel/footer/footer.component';
import { FiltrosComponent } from './painel/filtros/filtros.component';
import { ListaComponent } from './painel/lista/lista.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PainelComponent,
    HeaderComponent,
    FooterComponent,
    FiltrosComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }