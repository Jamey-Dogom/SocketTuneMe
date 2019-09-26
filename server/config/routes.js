const mongoose = require('mongoose');
const PlaylistController = require('./../controllers/playlists');
const SongController = require('./../controllers/songs');


module.exports = function(app) {

    app.post('/api/playlist', PlaylistController.create);

    app.get('/api/playlist/:key', PlaylistController.getOne);

    app.delete('/api/playlist/:id', PlaylistController.delete);

    app.put('/api/playlist/:key', PlaylistController.update);

    app.get('/api/songs', SongController.index);
    
    app.post('/api/songs', SongController.create);

    app.delete('/api/songs/:id', SongController.delete);

    app.put('/api/songs/:id', SongController.update);

    app.get('/api/songs/:id', SongController.getOne);

};
