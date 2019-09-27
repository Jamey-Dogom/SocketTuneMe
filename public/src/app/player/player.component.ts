import { Component, ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { Output, Input, EventEmitter } from '@angular/core';


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
//   template: `
//   <youtube-player
// [videoId]="id"
// (ready)="savePlayer($event)"
// (change)="onStateChange($event)"
// ></youtube-player>
// `

})

export class PlayerComponent implements OnInit {
  title = 'app'
  id = '';
  private player;
  private ytEvent;
  @Output() playTheNextSong = new EventEmitter();
  currState: any;

  @Input() videoID: String;
  it: String;
  counter = 0;
  autoPlay: String = "?autoplay=1"
  videoString: string = "https://www.youtube.com/embed/";

  ngOnChanges() {
    console.log("CHANGE")
    if(this.counter <= 9){
      this.it = this.videoID;
    }
  }

  onStateChange(event) {
    console.log(this.videoID)
    let self = this
    this.ytEvent = event.data;
    if(event.data == 0){
      console.log("OVER");
      this.currState = event.data
      this.playTheNextSong.emit(this.currState);
      console.log(this.videoID)
      console.log(this.it)
      JSON.stringify(this.it)
      this.player.loadVideoById(this.it);
      this.counter = 0;
    }
    // this.playVideo();
    this.currState = 1
   
  }
  savePlayer(player) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }

  constructor() {

  }

  ngOnInit() {
  }


}