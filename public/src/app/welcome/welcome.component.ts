import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
// Bringing in The Socket
import { Socket } from 'ngx-socket-io';
// Routing 
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  // Playlist to be created
  newPlaylist = {
    songs: [],
    host: null,
    key: '',
  }

  // Users ID
  socketId;

  constructor(
    private _httpService: HttpService,
    private _socket: Socket,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getId();

  }

  // Create a new party
  createParty() {
    this.newPlaylist.host = this.socketId;
    this._httpService.createPlaylist(this.newPlaylist)
      .subscribe((playlist:any) => {
        this._router.navigate([`/${this.newPlaylist.key}/${this.socketId}`]);
      })

  }

  getId() {
    this._socket.fromEvent('logIn')
      .subscribe((data: any) => {
        this.socketId = data.ip.port;
      });
  }

}
