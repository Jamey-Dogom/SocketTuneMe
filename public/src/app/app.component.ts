import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpService } from './http.service';
// Bringing in The Socket
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {



  constructor(
    private _httpService: HttpService,
    private _socket: Socket
  ) {}

  ngOnInit() {

  }
}
