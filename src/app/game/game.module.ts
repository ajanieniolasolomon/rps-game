import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game/game.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [GameComponent, LoginComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    FormsModule
  ]
})
export class GameModule { }
