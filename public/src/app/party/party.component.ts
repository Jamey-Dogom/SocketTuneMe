import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
// Bringing in The Socket
import { Socket } from 'ngx-socket-io';
// Added Activated Route and Params to get the Document
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
  playlist = null;

  newSong = {
    link: ""
  }

  SongId = null;
  socketId;
  playing = false;

  constructor(
    private _httpService: HttpService,
    private _socket: Socket,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }


  ngOnInit() {
    // Find and save the playlist based on url
    this._route.params
      .subscribe((params: Params) => {
        this._httpService.getPlaylist(params.key)
          .subscribe((data: any) => {
            this.playlist = data.playlist[0];
            this.socketId = params.socket;
          });

      })
  }

  onSubmit() {
    let arr = this.newSong.link.split(/[=&]+/);

    if (this.playing) {
      this._httpService.createSong({
        id: arr[1],
        likes: [],
        postedBy: this.socketId
      })
        .subscribe((data:any) => {
          console.log("should be a playlist object: ", this.playlist);
          this.playlist.songs.push(data);
          console.log("should be a playlist object 2: ", this.playlist);
          this._httpService.updatePlaylist(this.playlist)
            .subscribe((data:any) => {
              console.log(data)
            });
        })
      this.newSong = {
        link: ''
      }
      this._httpService.updatePlaylist(this.playlist)
        .subscribe(playlist => console.log(playlist));
    } else {
      this.SongId = arr[1];
      this.playing = true;
      this.newSong = {
        link: ''
      }
    }
  }


}
