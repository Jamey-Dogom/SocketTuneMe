import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
// Bringing in The Socket
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
  newSong: any
  SongId: ""
  title = 'public';
  allSongs = []
  songs = false
  userIP = null;

  constructor(
    private _httpService: HttpService,
    private _socket: Socket
  ) {
    this.newSong = { id: "" }
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.userIP);
  }

  onSubmit() {
    // Submission of FIRST new song
    if (this.songs) {
      this.allSongs.push(this.newSong.link)
      this.newSong = { id: "" }
    }

    // Submission of songs after the first
    else {
      var str = this.newSong.link;
      var array = str.split(/[=&]+/);
      this.SongId = array[1];
      this.newSong = { id: "" }
      this.songs = true
    }

  }
}
