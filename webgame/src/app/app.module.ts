import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Import BrowserAnimationsModule

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { GameComponent } from './components/game/game.component';

@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  // Add BrowserAnimationsModule to the imports array
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [
    MainComponent
  ]
})
export class AppModule { }
