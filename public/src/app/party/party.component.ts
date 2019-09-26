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
    query : ''
  }

  weGotResults = false;

  searchResults = []

  gapi : any;

  newSong = {
    link: ""
  }

  SongId = null;
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
      gapi['client'].setApiKey('API KEY');
         });
  }


  ngOnInit() {
    this._route.params
      .subscribe((params: Params) => {
        this._httpService.getPlaylist(params.room)
          .subscribe((data: any) => {


            // Find the playlist, assign userID based on url  
            this.playlist = data.playlist[0];
            this.userId = params.user;

          });
      })
    
    // invoke to join room
    this.joinRoom();

  }

  onSubmit() {
    // let arr = this.newSong.link.split(/[=&]+/);

    if (this.playing) {
      this._httpService.createSong({
        id: this.newSong.link,
        likes: [],
        postedBy: this.userId
      })
        .subscribe((data: any) => {
          console.log("should be a playlist object: ", this.playlist);
          this.playlist.songs.push(data);
          console.log("should be a playlist object 2: ", this.playlist);
          this._httpService.updatePlaylist(this.playlist)
            .subscribe((data: any) => {
              console.log(data)
            });
        })
      this.newSong = {
        link: ''
      }
      this._httpService.updatePlaylist(this.playlist)
        .subscribe(playlist => console.log(playlist));
    } else {
      this.SongId = this.newSong.link;
      this.playing = true;
      this.newSong = {
        link: ''
      }
    }
  }


  // Emit event to have server place socket into room
  joinRoom() {
    this._route.params
      .subscribe((params: Params) => {
        this._socket.emit('joinRoom',  params.room );
        console.log(params.room);
      });
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
        type : 'video'
    });

    // console.log("hi")
    request.execute(function(response)  {
      console.log("also here")
        var srchItems = response.result.items;
        // self.searchResults = self.searchResults.concat(srchItems);
        $('#results').empty()
        self.newSong.link = ''
        let counter = 1
        $.each(srchItems, function(index, item){
            let vidTitle = item.snippet.title
            let vidThumburl =  item.snippet.thumbnails.default.url;
            let vidThumbimg = '<pre><img  id="'+item.id.videoId+'" name="'+item.snippet.title+'" src="'+vidThumburl+'" alt="No  Image Available." style="width:300px;height:240px"></pre>'

            $(`#results${counter}`).append('<pre>' + '<p style = "color: white">' + vidTitle + '</p>' + vidThumbimg +  '</pre>').on('click', function(){
              console.log(vidTitle);
              $("#videoInput").val(item.id.videoId);
              self.newSong.link = item.id.videoId
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

      keyWordsearch(name){
      console.log("here");

      let self = this
      
      gapi['client'].load('youtube', 'v3', function() {
        console.log("here");
          let info = '{ "data": [{"name":' +  `"${name}"` + '}] }';
          console.log(info);
          JSON.stringify(info);
          console.log(info);
          let data = JSON.parse( info );
          $.each(data["data"], function( index, value ) {
              self.makeRequest(value["name"]);
          });
        
      });
      
    }
  
    
} 

