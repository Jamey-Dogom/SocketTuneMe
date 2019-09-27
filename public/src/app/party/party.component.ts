import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
// Bringing in The Socket
import { Socket } from 'ngx-socket-io';
// Added Activated Route and Params to get the Document
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { GoogleApiService } from 'ng-gapi/lib/GoogleApiService';
import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
  playlist = null;
  search = {
    query: ''
  }

  allPlaylistSongs = []

  weGotResults = false;

  searchResults = []

  gapi: any;

  newSong = {
    link: "",
    name: ""
  }

  SongId = null;
  // UserId is the Sockets ID
  userId;
  playing = false;

  constructor(
    private _httpService: HttpService,
    private _socket: Socket,
    private _router: Router,
    private _route: ActivatedRoute,
    private gapiService: GoogleApiService
  ) {
    gapiService.onLoad().subscribe(() => {
      // Here we can use gapi
      gapi['client'].setApiKey('AIzaSyDiHCKuqXBvB4rJBIIhP6GMr55A7o3Fj-8');
    });
  }

  ngOnInit() {
    // Grab User ID and Playlist from server
    this._socket.emit("SendID");
    this._socket.on("hereBro", (data) => {
      this.userId = data.id;
      this.playlist = data.playlist;
      console.log("Getting ID and Playlist",data);
    })
  }

  greetRoom(){
    this._socket.emit("greetRoom", { msg: "Hello everyone" });
    this._socket.on("Greeting", (data) => {
      console.log(data);
    })
  }

  onSubmit() {
    // if there is a song playing 
    // add the song the playlist songs[]

    // send the server to emit to everyone
    // in the room that a new song was added

    // update the playlist in mongo with new song
    let self = this
  

      // check if there is a song playing
    if (this.playing) {
      console.log("something is playing")
      let nextUp = {
        id : this.newSong.link,
        name : this.newSong.name,
        likes : 0
      }
      this.newSong = {
        link: '',
        name : ''
      }
      if(nextUp.name != ''){
        this.allPlaylistSongs.push(nextUp);
      }
     

      try{
        console.log(self.playlist)
        self.playlist.songs.push(nextUp);
        this._socket.emit("updatePlaylist", this.playlist);
        this._socket.on("updated", (data : any) => {
          this.playlist = data;
          console.log("new playlist", this.playlist)

        });
      }
      catch(e) {
          console.log(e)
      }
      

        // this will send the playlist to the server
     

      // this._httpService.createSong({
      //   id: this.newSong.link,
      //   likes: [],
      //   postedBy: this.userId
      // })
      //   .subscribe((data: any) => {
      //     console.log("should be a playlist object: ", this.playlist);
      //     this.playlist.songs.push(data);
      //     console.log("should be a playlist object 2: ", this.playlist);
      //     this._httpService.updatePlaylist(this.playlist)
      //       .subscribe((data: any) => {
      //         console.log(data)
      //       });
      //   })
      // this.newSong = {
      //   link: ''
      // }
      // this._httpService.updatePlaylist(this.playlist)
      //   .subscribe(playlist => console.log(playlist));
    } 
     // if not play the song - dont append the playlist and play song
    else {
      this.SongId = this.newSong.link;
      this.playing = true;
      this.newSong = {
        link: '',
        name : ''
      }
    }
  //  clear the input field

  //   set new song link to empty
  }

  makeRequest(q) {
    let self = this
    console.log("hereeeee")
    this.weGotResults = true
    this.searchResults = []
    var request = gapi['client']['youtube'].search.list({
      q: q,
      part: 'snippet',
      maxResults: 10,
      type: 'video'
    });

    // console.log("hi")
    request.execute(function (response) {
      console.log("also here")
      var srchItems = response.result.items;
      // self.searchResults = self.searchResults.concat(srchItems);
      $('#results').empty()
      self.newSong.link = ''
      let counter = 1
      $.each(srchItems, function (index, item) {
        let vidTitle = item.snippet.title
        let vidThumburl = item.snippet.thumbnails.default.url;
        let vidThumbimg = '<pre><img  id="' + item.id.videoId + '" name="' + item.snippet.title + '" src="' + vidThumburl + '" alt="No  Image Available." style="width:300px;height:240px"></pre>'

        $(`#results${counter}`).append('<pre>' + '<p style = "color: white">' + vidTitle + '</p>' + vidThumbimg + '</pre>').on('click', function () {
          console.log(vidTitle);
          $("#videoInput").val(item.snippet.title);
          self.newSong.link = item.id.videoId
          self.newSong.name = item.snippet.title
        });
        counter += 1;
      })
    });
  }


  triggerEvent() {
    console.log("suhhhh")
    // var target = event.target || event.srcElement || event.currentTarget;
    // var idAttr = target.attributes.id;
    // console.log(idAttr);
  }

  myFunction() {
    console.log(this.search.query)
    console.log(window['gapi'])
    this.keyWordsearch(this.search.query);
  };

  keyWordsearch(name) {
    console.log("here");

    let self = this

    gapi['client'].load('youtube', 'v3', function () {
      console.log("here");
      let info = '{ "data": [{"name":' + `"${name}"` + '}] }';
      console.log(info);
      JSON.stringify(info);
      console.log(info);
      let data = JSON.parse(info);
      $.each(data["data"], function (index, value) {
        self.makeRequest(value["name"]);
      });

    });

  }

  playTheNextSong(currState){
    console.log("HERE")
    this.SongId = null;
    if(currState== 0){
      if(this.allPlaylistSongs.length != 0){
        console.log(this.allPlaylistSongs[0].id)
        this.SongId = this.allPlaylistSongs[0].id
        this.playing = true;
        this.allPlaylistSongs.shift();
      }
    }
  }


}

