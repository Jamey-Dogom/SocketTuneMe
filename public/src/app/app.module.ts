import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { PlayerComponent, SafePipe } from './player/player.component';
import { FormsModule } from '@angular/forms';
// Imports for sockets
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:3333', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    NgxYoutubePlayerModule.forRoot(),
    // YoutubePlayerModule,npm i ngx-youtube-player
    AppRoutingModule,
    FormsModule,
    SocketIoModule.forRoot(config),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
