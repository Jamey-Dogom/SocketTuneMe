import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  createPlaylist(playlist){
    return this._http.post('/api/playlist', playlist);
  }

  getPlaylist(key) {
    return this._http.get('/api/playlist/' + key );
  }

  updatePlaylist(playlist) {
    return this._http.put(`/api/playlist/${playlist.key}`, playlist);
  }

  deletePlaylist(id){
    return this._http.delete('/api/playlist/' + id);
  }

  createSong(song) {
    return this._http.post('/api/songs', song);
  }

  deleteSong(id) {
    return this._http.delete('/api/songs/' + id);
  }

  getOneSong(id) {
    return this._http.get('/api/songs/' + id);
  }
  
}
