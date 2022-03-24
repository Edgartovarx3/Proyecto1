import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PocketComponent } from './pocket.component';
import { MainComponent } from './main/main.component';




@NgModule({
  declarations: [
    PocketComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    
    
  ],
  exports:[
    MainComponent,
    PocketComponent
  ]
})
export class PokemonModule { }
