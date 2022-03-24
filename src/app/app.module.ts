import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { contadormodue } from './contador/contador.modue';
import { PokemonModule } from './pocket/pokemon.module';






@NgModule({
  declarations: [
    AppComponent,
   
  
  ],
  imports: [
    
    BrowserModule,
    contadormodue,
    PokemonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
