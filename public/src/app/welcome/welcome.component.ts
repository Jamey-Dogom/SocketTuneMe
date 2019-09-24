import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
// Bringing in The Socket
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _socket: Socket
  ) { }

  ngOnInit() {
  }

}
