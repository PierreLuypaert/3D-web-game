import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { GameComponent } from './components/game/game.component';

const routes: Routes = [
  { path: '', component: GameComponent }, // Set MenuComponent as the default route
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
