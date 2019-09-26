import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
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
    room: '',
  }

  // Users ID
  socketId: String;

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {

  }

  // Create a new party
  createParty() {
    // Assigns a random string to ID the user
    const user = this.ID();
    this.newPlaylist.host = user;
    this._httpService.createPlaylist(this.newPlaylist)
      .subscribe((playlist: any) => { 
          this._router.navigate([`/${ this.newPlaylist.room }/${ user }`]);
      });
  }

  

  // Create Unique ID
  ID(){
    return '_' + Math.random().toString(36).substr(2,9);
  }

}
