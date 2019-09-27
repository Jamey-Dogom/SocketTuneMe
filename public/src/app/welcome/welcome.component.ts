import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
// Routing 
import { ActivatedRoute, Params, Router } from '@angular/router';
// Bringing in The Socket
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  // Socket ID
  user;

  // Playlist to be created
  newPlaylist = {
    songs: [],
    host: null,
    room: '',
  }

  // Playlist to join
  playlist = {
    room: '',
  }

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _socket: Socket
  ) { }

  ngOnInit() {
    this.grabID();

  }

  // Create a new party
  createParty() {

    this._router.navigate(["/partyroom/", this.playlist.room]);

  }

  // Save ID for user
  grabID() {
    this._socket.on("log", (data) => {
      this.user = data.id;
      console.log(data.msg + ' ' + data.id);
    });
  }

}
