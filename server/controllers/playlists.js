const mongoose = require('mongoose');
const Playlist = mongoose.model('Playlist');


module.exports = {
    create(req, res) {
        Playlist.create(req.body)
            .then(playlist => res.json({ playlist }))
            .catch(err => {
                const errors = {errors:err.errors};
                res.json(errors);
            })
    },

    delete(req, res) {
        Playlist.findByIdAndDelete(req.params.id)
            .then(() => res.json({ status: "Successfully Deleted PlayList." }))
            .catch(e => res.json({ errors: e }));
    },

    getOne(req, res) {
        Playlist.findById(req.params.id)
            .then(playlist => res.json({ playlist }))
            .catch(e => res.json({ errors: e }));
    }
}