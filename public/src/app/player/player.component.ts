import { Component, ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe, OnInit} from '@angular/core';
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
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {
  title = 'app';

  @Input() videoID: String;
  autoPlay: String = "?autoplay=1"
  videoString: string = "https://www.youtube.com/embed/";

  constructor() {

  }

  ngOnInit() {
  }
  

}