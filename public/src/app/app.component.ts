import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  newSong: any
  SongId: ""
  title = 'public';
  allSongs = []
  songs = false


  constructor(private _httpService: HttpService) {
    this.newSong = { id: "" }
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  // Song Liked 
  // update the song object's like field
  //- re-sort {{allSongs}} array by # of Likes

  // Next Song
  // method for determining when a song ends
  // plays the next



  onSubmit() {
    // Submission of FIRST new song
    if(this.songs){
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
    
    // this.SongId = this.newSong.id
    // // Code to send off the form data (this.newTask) to the Service
    // console.log(this.newShow)
    // let observable = this._httpService.addShow(this.newShow);
    // // Reset this.newTask to a new, clean object.
    // observable.subscribe(data => {
    //   this.allShows = []
    //   console.log('gottem', data)
    //   this.newShow = { title: "", description: "" }
    // })
    // this.getAllShows();
  }

}
